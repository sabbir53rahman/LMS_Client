import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Rocket, ArrowRight } from "lucide-react"

export default function SuccessStories() {
  const stories = [
    {
      name: "Alex Thompson",
      role: "Senior ML Engineer at OpenAI",
      previousRole: "Marketing Assistant",
      story:
        "I went from marketing to AI engineering in 10 months. The AI course was incredibly comprehensive and the mentorship was invaluable.",
      course: "Complete AI & ML Bootcamp",
      salaryIncrease: "340%",
      timeframe: "10 months",
      image: "/placeholder.svg?height=80&width=80",
      company: "OpenAI",
      skills: ["Python", "TensorFlow", "Deep Learning"],
    },
    {
      name: "Maria Santos",
      role: "Lead Product Designer at Figma",
      previousRole: "Graphic Designer",
      story:
        "The UI/UX course completely transformed my design thinking. I now lead a team of 12 designers at one of the world's top design companies.",
      course: "Advanced UI/UX Design System",
      salaryIncrease: "280%",
      timeframe: "8 months",
      image: "/placeholder.svg?height=80&width=80",
      company: "Figma",
      skills: ["Figma", "Design Systems", "User Research"],
    },
    {
      name: "James Wilson",
      role: "Full Stack Architect at Stripe",
      previousRole: "Junior Developer",
      story:
        "From junior to architect in less than a year! The full-stack course covered everything I needed to advance my career exponentially.",
      course: "Full Stack Web Development",
      salaryIncrease: "250%",
      timeframe: "11 months",
      image: "/placeholder.svg?height=80&width=80",
      company: "Stripe",
      skills: ["React", "Node.js", "AWS", "Microservices"],
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-black/50"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-500/30 backdrop-blur-sm px-4 py-2 mb-6">
            <Rocket className="w-4 h-4 mr-2" />
            Success Stories
          </Badge>
          <h2 className="text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Life-Changing
            </span>{" "}
            Transformations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real stories from students who achieved extraordinary career growth with SkillNest
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-gray-900/50 backdrop-blur-xl border border-gray-800 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 hover:-translate-y-4"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-bl-full"></div>
              <CardContent className="p-8 relative z-10">
                <Quote className="w-8 h-8 text-green-400 mb-6" />

                <p className="text-gray-200 mb-6 italic leading-relaxed">&quot;{story.story}&quot;</p>

                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="w-16 h-16 ring-2 ring-green-500/30">
                    <AvatarImage src={story.image || "/placeholder.svg"} />
                    <AvatarFallback className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold">
                      {story.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-xl font-bold text-white">{story.name}</h4>
                    <p className="text-green-300 font-semibold">{story.role}</p>
                    <p className="text-gray-400 text-sm">Previously: {story.previousRole}</p>
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-2xl p-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Course:</span>
                    <span className="text-green-300 font-semibold">{story.course}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Salary Increase:</span>
                    <span className="text-green-400 font-bold text-lg">+{story.salaryIncrease}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Timeframe:</span>
                    <span className="text-white font-semibold">{story.timeframe}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-sm text-gray-400 mb-2">Skills gained:</div>
                  <div className="flex flex-wrap gap-2">
                    {story.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        className="bg-green-500/20 text-green-300 border-0 text-xs hover:bg-green-500/30 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-12 py-4 text-lg rounded-2xl shadow-2xl shadow-green-500/25">
            Read More Success Stories
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
