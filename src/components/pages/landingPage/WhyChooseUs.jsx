import { Badge } from "@/components/ui/badge"
import { Brain, Globe, Users, Award, Zap, Heart, Target, TrendingUp } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning Assistant",
      description:
        "Get personalized recommendations, instant doubt resolution, and adaptive learning paths powered by advanced AI.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Globe,
      title: "Global Learning Community",
      description: "Connect with millions of learners worldwide, join study groups, and collaborate on real projects.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Get guidance from industry professionals and receive personalized feedback on your progress.",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: Award,
      title: "Industry Certificates",
      description: "Earn globally recognized certificates that boost your career prospects and validate your skills.",
      color: "from-purple-500 to-indigo-500",
    },
  ]

  const stats = [
    { label: "Course Quality", value: "99.7%", icon: Brain },
    { label: "Student Satisfaction", value: "98.5%", icon: Heart },
    { label: "Course Completion", value: "94.2%", icon: Target },
    { label: "Career Success", value: "89.3%", icon: TrendingUp },
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-black/50"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <Badge className="bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border border-orange-500/30 backdrop-blur-sm px-4 py-2 mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Why Choose Us
          </Badge>
          <h2 className="text-5xl font-bold text-white mb-6">
            Why{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">SkillNest</span>{" "}
            is Different
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of learning with cutting-edge features and expert-led instruction
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="group flex gap-6 items-start">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-200 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-gray-900/50 to-black/50 rounded-3xl p-8 backdrop-blur-xl border border-gray-800">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-700 transition-colors">
                      <stat.icon className="w-8 h-8 text-orange-300" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-red-400 to-pink-500 rounded-full opacity-20 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
