import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Target, Users, Globe, Award, ArrowRight, Heart } from "lucide-react"

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border border-orange-500/30 backdrop-blur-sm px-4 py-2 mb-8">
            <Heart className="w-4 h-4 mr-2" />
            Our Story
          </Badge>

          <h1 className="text-6xl font-black leading-tight mb-8">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
              Empowering
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              Every Learner
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Worldwide
            </span>
          </h1>

          <p className="text-2xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            At SkillNest, we believe that <span className="text-orange-400 font-semibold">quality education</span>{" "}
            should be accessible to everyone, everywhere. We&apos;re on a mission to democratize learning and help millions
            achieve their career dreams.
          </p>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {[
              { icon: Users, number: "2M+", label: "Active Learners" },
              { icon: Globe, number: "150+", label: "Countries" },
              { icon: Award, number: "10K+", label: "Courses" },
              { icon: Target, number: "95%", label: "Success Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-gray-800">
                  <stat.icon className="w-8 h-8 text-orange-300" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl shadow-orange-500/25">
            Join Our Mission
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-red-400 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
    </section>
  )
}
