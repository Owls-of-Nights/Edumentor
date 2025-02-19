"use client"

import { motion } from "framer-motion"
import { AnimatedSectionHeader } from "@/components/animated-section-header"
import { DeveloperCard } from "@/components/developer-card"
import { SocialLinks } from "@/components/social-links"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Twitter, Mail, DiscIcon as Discord } from "lucide-react"

const developers = [
  {
    name: "Narayan Bhusal",
    role: "Lead Developer",
    image: "https://iili.io/2Z7vtOQ.png",
    bio: "Frontend developer passionate about tech-driven learning solutions.",
    socialLinks: [
      { icon: Github, url: "https://github.com/naranbhusal02" },
      { icon: Linkedin, url: "https://linkedin.com/in/naranbhusal02" },
      { icon: Twitter, url: "https://twitter.com/naranbhusal02" },
      { icon: Mail, url: "mailto:contactwithnaran@proton.me" },
    ],
  },
  {
    name: "Nayan Acharya",
    role: "Lead Developer",
    image: "https://iili.io/2Z7vNls.jpg",
    bio: "Creative frontend developer focused on building impactful solutions.",
    socialLinks: [
      { icon: Github, url: "https://github.com/nayan135" },
      { icon: Linkedin, url: "https://www.linkedin.com/in/nayan135/" },
      { icon: Twitter, url: "https://x.com/Nooneknows135" },
      { icon: Mail, url: "mailto:nayan135@proton.me" },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <AnimatedSectionHeader
        title="Contact Our Developers"
        subtitle="Reach out to our team directly through their preferred channels"
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {developers.map((developer) => (
          <motion.div key={developer.name} variants={itemVariants}>
            <DeveloperCard developer={developer} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="max-w-2xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
        <Card>
          <CardHeader>
            <CardTitle>Other Ways to Connect</CardTitle>
            <CardDescription>Join our community and stay updated</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <motion.div variants={itemVariants}>
              <h3 className="font-semibold mb-2">EduMentor Community</h3>
              <p className="text-muted-foreground mb-2">
                Join our vibrant community of learners and educators on Discord.
              </p>
              <SocialLinks links={[{ icon: Discord, url: "https://discord.gg/BpnVU8rW" }]} size="lg" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="font-semibold mb-2">Official EduMentor Accounts</h3>
              <p className="text-muted-foreground mb-2">
                Follow us on our official social media accounts for the latest updates.
              </p>
              <SocialLinks
                links={[
                  { icon: Twitter, url: "https://twitter.com/naranbhusal02" },
                  { icon: Linkedin, url: "https://linkedin.com/in/naranbhusal02" },
                  { icon: Github, url: "https://github.com/naranbhusal02" },
                ]}
                size="lg"
              />
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

