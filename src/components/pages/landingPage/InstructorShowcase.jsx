import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, CheckCircle, Award } from "lucide-react"

export default function InstructorShowcase() {
  const instructors = [
    {
      name: "Dr. Sarah Chen",
      title: "Former Head of AI at Google",
      expertise: "Machine Learning & AI",
      students: "125,000+",
      courses: "18",
      rating: "4.9",
      company: "Google",
      achievement: "Published 50+ research papers",
    },
    {
      name: "Marcus Johnson",
      title: "Ex-Senior Engineer at Tesla",
      expertise: "Full Stack Development",
      students: "89,000+",
      courses: "12",
      rating: "4.8",
      company: "Tesla",
      achievement: "Built autopilot systems",
    },
    {
      name: "Elena Rodriguez",
      title: "Former Design Director at Apple",
      expertise: "UI/UX Design",
      students: "67,000+",
      courses: "15",
      rating: "4.9",
      company: "Apple",
      achievement: "Designed iOS interfaces",
    },
    {
      name: "David Kim",
      title: "Ex-Data Scientist at Netflix",
      expertise: "Data Science & Analytics",
      students: "54,000+",
      courses: "10",
      rating: "4.7",
      company: "Netflix",
      achievement: "Built recommendation engine",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="bg-gradient-to-r from-orange-400/20 to-red-500/20 text-orange-300 border border-orange-500/30 backdrop-blur-sm px-4 py-2 mb-6">
            <Award className="w-4 h-4 mr-2" />
            World-Class Faculty
          </Badge>
          <h2 className="text-5xl font-bold text-white mb-6">
            Learn from{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Industry Legends
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our instructors are pioneers, innovators, and leaders from the world&apos;s top companies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-gray-900/50 backdrop-blur-xl border border-gray-800 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 hover:-translate-y-4"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-bl-3xl"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="relative mb-6">
                  <Avatar className="w-24 h-24 mx-auto ring-4 ring-orange-500/30 group-hover:ring-orange-500/50 transition-all duration-300">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" />
                    <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 text-white">
                      {instructor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-200 transition-colors">
                  {instructor.name}
                </h3>
                <p className="text-orange-300 font-semibold mb-1">{instructor.title}</p>
                <p className="text-gray-400 text-sm mb-4">{instructor.expertise}</p>

                <div className="bg-gray-800/50 rounded-2xl p-4 mb-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Students:</span>
                    <span className="text-white font-semibold">{instructor.students}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Courses:</span>
                    <span className="text-white font-semibold">{instructor.courses}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Rating:</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{instructor.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-gray-400 mb-4">🏆 {instructor.achievement}</div>

                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl">
                  View Courses
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
