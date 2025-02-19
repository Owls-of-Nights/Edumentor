import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const tableOfContents = [
  { title: "Introduction to Machine Learning", link: "#introduction" },
  { title: "Supervised Learning", link: "#supervised" },
  { title: "Unsupervised Learning", link: "#unsupervised" },
  { title: "Neural Networks", link: "#neural-networks" },
  { title: "Deep Learning", link: "#deep-learning" },
  { title: "Natural Language Processing", link: "#nlp" },
  { title: "Computer Vision", link: "#computer-vision" },
  { title: "Reinforcement Learning", link: "#reinforcement" },
  { title: "Model Evaluation and Validation", link: "#evaluation" },
  { title: "Ethical Considerations in AI", link: "#ethics" },
]

export default function MachineLearningCoursePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Machine Learning Course</h1>
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

