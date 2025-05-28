import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Lightbulb, Target, Globe, Shield } from "lucide-react"

export default function CompanyValues() {
  const values = [
    {
      icon: Heart,
      title: "Learner-First",
      description: "Every decision we make is guided by what's best for our learners. Their success is our success.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Inclusive Community",
      description: "We believe diverse perspectives make us stronger. Everyone deserves a seat at the learning table.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We constantly push boundaries to create better learning experiences through technology and creativity.",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from course quality to customer support.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "We're building a world where geography doesn't limit access to quality education and opportunities.",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We build trust through honest communication, ethical practices, and protecting our learners' data.",
      color: "from-blue-500 to-cyan-500",
    },
  ]

  return (
    <section className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="bg-gray-800 text-orange-300 border border-gray-700 px-4 py-2 mb-6">
            <Heart className="w-4 h-4 mr-2" />
            Our Values
          </Badge>
          <h2 className="text-5xl font-bold text-white mb-6">
            What{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Drives</span> Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our core values shape everything we do and guide us in our mission to transform lives through education.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group bg-gray-900/50 backdrop-blur-xl border border-gray-800 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 hover:-translate-y-3"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-200 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
