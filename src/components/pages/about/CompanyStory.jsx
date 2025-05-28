import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Rocket, Users, Trophy } from "lucide-react"

export default function CompanyStory() {
  const milestones = [
    {
      year: "2019",
      title: "The Beginning",
      description: "Founded with a vision to make quality education accessible to everyone",
      icon: Lightbulb,
      color: "from-orange-500 to-red-500",
    },
    {
      year: "2020",
      title: "First Million",
      description: "Reached our first million learners and launched mobile app",
      icon: Users,
      color: "from-red-500 to-pink-500",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded to 100+ countries with localized content",
      icon: Rocket,
      color: "from-pink-500 to-purple-500",
    },
    {
      year: "2024",
      title: "Industry Leader",
      description: "Became the #1 skill development platform with 2M+ active learners",
      icon: Trophy,
      color: "from-purple-500 to-indigo-500",
    },
  ]

  return (
    <section className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="bg-gray-800 text-orange-300 border border-gray-700 px-4 py-2 mb-6">
            <Lightbulb className="w-4 h-4 mr-2" />
            Our Journey
          </Badge>
          <h2 className="text-5xl font-bold text-white mb-6">
            From <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Idea</span>{" "}
            to Impact
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            What started as a simple idea to help people learn new skills has grown into a global movement that&apos;s
            transforming lives and careers worldwide.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-red-500 rounded-full hidden lg:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col lg:gap-12 gap-8`}
              >
                <div className="lg:w-1/2 w-full">
                  <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${milestone.color} rounded-xl flex items-center justify-center`}
                        >
                          <milestone.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-orange-400">{milestone.year}</div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:block w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full border-4 border-black relative z-10"></div>

                <div className="lg:w-1/2 w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
