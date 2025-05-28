import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Gamepad2, Plane, GraduationCap, Heart, Zap } from "lucide-react"

export default function CompanyCulture() {
  const perks = [
    {
      icon: Coffee,
      title: "Flexible Work",
      description: "Work from anywhere, anytime. We trust our team to deliver amazing results.",
    },
    {
      icon: GraduationCap,
      title: "Learning Budget",
      description: "$2,000 annual learning budget for courses, conferences, and skill development.",
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs.",
    },
    {
      icon: Plane,
      title: "Unlimited PTO",
      description: "Take the time you need to recharge and come back stronger than ever.",
    },
    {
      icon: Gamepad2,
      title: "Team Building",
      description: "Regular team events, game nights, and annual company retreats.",
    },
    {
      icon: Zap,
      title: "Innovation Time",
      description: "20% time to work on passion projects and explore new ideas.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border border-orange-500/30 px-4 py-2 mb-6">
            <Heart className="w-4 h-4 mr-2" />
            Company Culture
          </Badge>
          <h2 className="text-5xl font-bold text-white mb-6">
            Life at{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">SkillNest</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We&apos;ve built a culture where talented people can do their best work, grow professionally, and make a
            meaningful impact on millions of learners worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {perks.map((perk, index) => (
            <Card
              key={index}
              className="group bg-gray-900/50 backdrop-blur-xl border border-gray-800 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-800">
                  <perk.icon className="w-8 h-8 text-orange-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-200 transition-colors">
                  {perk.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{perk.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900/50 to-black/50 rounded-3xl p-12 text-center border border-gray-800">
          <h3 className="text-3xl font-bold text-white mb-4">Join Our Amazing Team</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for passionate individuals who want to make a difference in education. Come build the
            future of learning with us!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300">
              View Open Positions
            </button>
            <button className="border-2 border-gray-600 text-white hover:bg-gray-800 px-8 py-4 rounded-2xl font-semibold transition-all duration-300">
              Learn About Benefits
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
