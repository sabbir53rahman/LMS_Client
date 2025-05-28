import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Github, Users } from "lucide-react"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      bio: "Former VP of Education at Google. Passionate about democratizing access to quality education.",
      image: "/placeholder.svg?height=200&width=200",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      bio: "Ex-Principal Engineer at Meta. Building the future of online learning with cutting-edge technology.",
      image: "/placeholder.svg?height=200&width=200",
      social: { linkedin: "#", github: "#" },
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Content",
      bio: "Former Curriculum Director at Khan Academy. Ensuring every course meets the highest quality standards.",
      image: "/placeholder.svg?height=200&width=200",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "David Kim",
      role: "Head of Product",
      bio: "Ex-Product Lead at Coursera. Designing intuitive learning experiences that drive real results.",
      image: "/placeholder.svg?height=200&width=200",
      social: { linkedin: "#", github: "#" },
    },
    {
      name: "Lisa Thompson",
      role: "Head of Marketing",
      bio: "Former Growth Lead at Udemy. Connecting learners with life-changing educational opportunities.",
      image: "/placeholder.svg?height=200&width=200",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "James Wilson",
      role: "Head of Engineering",
      bio: "Ex-Senior Engineer at Netflix. Building scalable systems that serve millions of learners globally.",
      image: "/placeholder.svg?height=200&width=200",
      social: { linkedin: "#", github: "#" },
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border border-orange-500/30 px-4 py-2 mb-6">
            <Users className="w-4 h-4 mr-2" />
            Meet Our Team
          </Badge>
          <h2 className="text-5xl font-bold text-white mb-6">
            The{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Visionaries
            </span>{" "}
            Behind SkillNest
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our diverse team of educators, technologists, and innovators is united by a shared passion for transforming
            how the world learns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group bg-gray-900/50 backdrop-blur-xl border border-gray-800 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 hover:-translate-y-4"
            >
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <Avatar className="w-32 h-32 mx-auto ring-4 ring-orange-500/30 group-hover:ring-orange-500/50 transition-all duration-300">
                    <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 text-white">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-200 transition-colors">
                  {member.name}
                </h3>
                <p className="text-orange-300 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{member.bio}</p>

                <div className="flex justify-center gap-3">
                  {member.social.linkedin && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-10 h-10 p-0 bg-gray-800 hover:bg-orange-500/20 rounded-full"
                    >
                      <Linkedin className="w-4 h-4 text-gray-400 hover:text-orange-300" />
                    </Button>
                  )}
                  {member.social.twitter && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-10 h-10 p-0 bg-gray-800 hover:bg-orange-500/20 rounded-full"
                    >
                      <Twitter className="w-4 h-4 text-gray-400 hover:text-orange-300" />
                    </Button>
                  )}
                  {member.social.github && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-10 h-10 p-0 bg-gray-800 hover:bg-orange-500/20 rounded-full"
                    >
                      <Github className="w-4 h-4 text-gray-400 hover:text-orange-300" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
