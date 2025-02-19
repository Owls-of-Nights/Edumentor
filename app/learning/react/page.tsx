"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ReactLearningPage() {
  const [activeTab, setActiveTab] = useState("introduction")

  const content = {
    introduction: {
      title: "Introduction to React",
      content: `React is a declarative, component-based JavaScript library used for creating user interfaces. 
      To achieve MVC framework like functionalities in React, developers use it in conjunction with a Flux 
      flavour of choice, e.g. Redux.`,
    },
    components: {
      title: "Components",
      content: `Components let you split the UI into independent, reusable pieces. A React component can be 
      defined as an ES6 class that extends the base React.Component class. In its minimal form, a component 
      must define a render method that specifies how the component renders to the DOM.`,
    },
    props: {
      title: "Props",
      content: `Props are properties passed by a component's parent in order to specify some values the 
      component cannot know by itself. A property can also contain a function that can be called by the 
      component after certain events occur.`,
    },
    state: {
      title: "State",
      content: `State in React components is essential to manage and communicate data in your application. 
      It is represented as a JavaScript object and has component level scope. It can be thought of as the 
      private data of your component.`,
    },
    lifecycle: {
      title: "Component Lifecycle",
      content: `React components have several lifecycle methods that are called in sequence as a component 
      is mounted, updated or unmounted from the DOM. Understanding these lifecycle methods is key to 
      building robust React applications.`,
    },
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Learning React</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="introduction">Introduction</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="props">Props</TabsTrigger>
          <TabsTrigger value="state">State</TabsTrigger>
          <TabsTrigger value="lifecycle">Lifecycle</TabsTrigger>
        </TabsList>

        {Object.entries(content).map(([key, section]) => (
          <TabsContent key={key} value={key}>
            <Card>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="whitespace-pre-line">{section.content}</CardDescription>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Code Example</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              {`import React from 'react'

class HelloWorld extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Hello World!'
    }
  }

  render() {
    return <h1>{this.state.message}</h1>
  }
}`}
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

