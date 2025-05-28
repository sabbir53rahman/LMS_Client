import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Compass } from "lucide-react"

export default function MissionVision() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="bg-gray-800 text-orange-300 border border-gray-700 px-4 py-2 mb-6">
            <Compass className="w-4 h-4 mr-2" />
            Our Purpose
          </Badge>
          <h2 className="text-5xl font-bold text-white mb-6">
            Mission &{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Vision</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="group bg-gray-900/50 backdrop-blur-xl border border-gray-800 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                To democratize access to high-quality education and empower individuals worldwide to acquire the skills
                they need to thrive in the digital economy.
              </p>
            </CardContent>
          </Card>

          <Card className="group bg-gray-900/50 backdrop-blur-xl border border-gray-800 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                A world where anyone, anywhere can unlock their potential through learning, regardless of their
                background, location, or circumstances.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900/50 to-black/50 rounded-3xl p-12 border border-gray-800 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">Our Impact</h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Since our founding, we&apos;ve helped over 2 million learners acquire new skills, advance their careers, and
              transform their lives. But we&apos;re just getting started.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">89%</div>
                <div className="text-gray-400">Career Advancement</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">$15K</div>
                <div className="text-gray-400">Average Salary Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">94%</div>
                <div className="text-gray-400">Course Completion Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
