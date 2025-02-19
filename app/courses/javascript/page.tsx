import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const tableOfContents = [
  { title: "Introduction to JavaScript", link: "#introduction" },
  { title: "Variables and Data Types", link: "#variables" },
  { title: "Control Flow", link: "#control-flow" },
  { title: "Functions", link: "#functions" },
  { title: "Objects and Arrays", link: "#objects-and-arrays" },
  { title: "DOM Manipulation", link: "#dom" },
  { title: "Event Handling", link: "#events" },
  { title: "Asynchronous JavaScript", link: "#async" },
  { title: "ES6+ Features", link: "#es6" },
  { title: "JavaScript Modules", link: "#modules" },
]

export default function JavaScriptCoursePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">JavaScript Course</h1>
      <Card>
        <CardHeader>
          <CardTitle>Table of Contents</CardTitle>
          <CardDescription>Click on a topic to jump to that section</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {tableOfContents.map((item, index) => (
              <li key={index}>
                <Link href={item.link} className="text-primary hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

