import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SocialLinks } from "@/components/social-links"
import type React from "react" // Added import for React

interface Developer {
  name: string
  role: string
  image: string
  bio: string
  socialLinks: Array<{ icon: React.ElementType; url: string }>
}

interface DeveloperCardProps {
  developer: Developer
}

export function DeveloperCard({ developer }: DeveloperCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-0">
        <div className="flex items-center space-x-4">
          <Image
            src={developer.image || "/placeholder.svg"}
            alt={developer.name}
            width={64}
            height={64}
            className="rounded-full"
          />
          <div>
            <CardTitle>{developer.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{developer.role}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mt-2 mb-4">{developer.bio}</p>
        <SocialLinks links={developer.socialLinks} />
      </CardContent>
    </Card>
  )
}

