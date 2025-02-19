"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark"
    setTheme(savedTheme as "light" | "dark")
    document.documentElement.classList.toggle("dark", savedTheme === "dark")
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <header className="bg-background shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="https://iili.io/2tjq3EF.png" alt="EduMentor Logo" width={40} height={40} className="w-10 h-10" />
          <span className="text-2xl font-bold text-primary">EduMentor</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-foreground hover:text-primary">
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-foreground hover:text-primary flex items-center">
              Courses <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/courses/react" className="w-full">
                  React
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/courses/javascript" className="w-full">
                  JavaScript
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/courses/python" className="w-full">
                  Python
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/courses/machine-learning" className="w-full">
                  Machine Learning
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/community" className="text-foreground hover:text-primary">
            Community
          </Link>
          <Link href="/contact" className="text-foreground hover:text-primary">
            Contact
          </Link>
          <Link href="/login" className="text-foreground hover:text-primary">
            Login
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background fixed top-16 left-0 right-0 z-40">
          <nav className="flex flex-col space-y-2 p-4">
            <Link href="/" className="text-foreground hover:text-primary">
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground hover:text-primary flex items-center">
                Courses <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/courses/react" className="w-full">
                    React
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/courses/javascript" className="w-full">
                    JavaScript
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/courses/python" className="w-full">
                    Python
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/courses/machine-learning" className="w-full">
                    Machine Learning
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/community" className="text-foreground hover:text-primary">
              Community
            </Link>
            <Link href="/login" className="text-foreground hover:text-primary">
              Login
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      )}
      <style jsx global>{`
        body {
          padding-top: 4rem;
        }
      `}</style>
    </header>
  )
}

export default Header

