import { Button } from "@/components/ui/button"
import type React from "react"

interface SocialLinkProps {
  icon: React.ElementType
  url: string
}

interface SocialLinksProps {
  links: SocialLinkProps[]
  size?: "default" | "sm" | "lg" | "icon"
}

export function SocialLinks({ links, size = "default" }: SocialLinksProps) {
  return (
    <div className="flex space-x-2">
      {links.map((link, index) => (
        <Button key={index} variant="outline" size={size} asChild>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            <link.icon className="h-4 w-4" />
            <span className="sr-only">{link.icon.name}</span>
          </a>
        </Button>
      ))}
    </div>
  )
}

