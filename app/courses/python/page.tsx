import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const tableOfContents = [
  { title: "Introduction to Python", link: "#introduction" },
  { title: "Variables and Data Types", link: "#variables" },
  { title: "Control Flow", link: "#control-flow" },
  { title: "Functions", link: "#functions" },
  { title: "Lists, Tuples, and Dictionaries", link: "#data-structures" },
  { title: "Object-Oriented Programming", link: "#oop" },
  { title: "File Handling", link: "#file-handling" },
  { title: "Modules and Packages", link: "#modules" },
  { title: "Exception Handling", link: "#exceptions" },
  { title: "Python Standard Library", link: "#standard-library" },
]

export default function PythonCoursePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Python Course</h1>
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

