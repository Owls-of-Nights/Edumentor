import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Award, Zap, Star, Code, Database, Server } from "lucide-react"
import ChatBotIframe from "@/components/ChatBotIframe"
import LinkedInEmbed from "@/components/win"

const courses = [
  {
    id: 1,
    title: "Introduction to C Programming",
    icon: Code,
    description: "Learn the basics of C programming language",
  },
  {
    id: 2,
    title: "Advanced C Programming Techniques",
    icon: Code,
    description: "Master advanced concepts in C programming",
  },
  {
    id: 3,
    title: "Data Structures in C",
    icon: Database,
    description: "Implement and understand essential data structures",
  },
  {
    id: 4,
    title: "Algorithms with C",
    icon: Server,
    description: "Learn fundamental algorithms and their implementation in C",
  },
  { id: 5, title: "Web Development Fundamentals", icon: BookOpen, description: "Get started with web development" },
  { id: 6, title: "Machine Learning Basics", icon: Zap, description: "Introduction to machine learning concepts" },
]

const reviews = [
  {
    id: 1,
    name: "John Doe",
    course: "Introduction to C Programming",
    rating: 5,
    comment: "Excellent course for beginners!",
  },
  {
    id: 2,
    name: "Jane Smith",
    course: "Advanced C Programming Techniques",
    rating: 4,
    comment: "Very informative and challenging.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    course: "Data Structures in C",
    rating: 5,
    comment: "Helped me understand complex concepts easily.",
  },
  {
    id: 4,
    name: "Emily Brown",
    course: "Algorithms with C",
    rating: 4,
    comment: "Great explanations and practical examples.",
  },
  {
    id: 5,
    name: "Sarah Wilson",
    course: "Web Development Fundamentals",
    rating: 5,
    comment: "A comprehensive introduction to web development.",
  },
  {
    id: 6,
    name: "David Lee",
    course: "Machine Learning Basics",
    rating: 4,
    comment: "Great starting point for ML enthusiasts.",
  },
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section with new design */}
      <div className="relative w-full max-w-[1400px] mx-auto mb-12">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-900 py-32 px-8">
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]" />

          {/* Blur effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-blue-900/25 to-blue-900/50 backdrop-blur-[1px]" />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">Welcome to EduMentor</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">Personalized Learning Powered by AI</p>
            <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-lg">
              <Link href="/login">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2" /> Personalized Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>AI-driven content tailored to your learning style and pace.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2" /> Interactive Community
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Engage with peers and experts in our vibrant learning community.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="mr-2" /> Earn Certificates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Gain recognition for your achievements with our certified courses.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="mr-2" /> Real-time Progress Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Monitor your learning journey with advanced analytics and insights.</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <course.icon className="mr-2" /> {course.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{course.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((review) => (
            <Card key={review.id} className="shadow-md hover:shadow-lg transition-shadow duration-300 h-48">
              <CardHeader>
                <CardTitle>{review.name}</CardTitle>
                <CardDescription>{review.course}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-sm line-clamp-3">{review.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Developers Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Developers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Image
                  src="https://iili.io/2Z7vtOQ.png"
                  alt="Narayan Bhusal"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <CardTitle>Narayan Bhusal</CardTitle>
                  <CardDescription>Lead Developer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Hi, I'm Narayan Bhusal! A frontend developer passionate about tech-driven learning solutions. Excited to
                build for Quality Education! 🚀
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Image
                  src="https://iili.io/2Z7vNls.jpg"
                  alt="Narayan Bhusal"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <CardTitle>Nayan Acharya</CardTitle>
                  <CardDescription>Lead Developer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Hi, I'm Nayan! A creative frontend developer focused on building impactful solutions. Excited to
                innovate for Quality Education in this hackathon! 🎯✨
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* AI Chat Section */}
      <div className="App">
        <h1>Ask anything with AI</h1>
        <ChatBotIframe />
      </div>

      {/* LinkedIn post win */}
      <section className="mb-12">
        <LinkedInEmbed />
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 bg-muted rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
        <p className="text-xl mb-8">Join thousands of students already benefiting from EduMentor.</p>
        <Button asChild size="lg">
          <Link href="/login">Sign Up Now</Link>
        </Button>
      </section>
    </div>
  )
}

