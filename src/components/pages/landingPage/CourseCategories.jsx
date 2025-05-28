import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, TrendingUp, Camera, Music, Brain, Layers, ChevronRight } from "lucide-react"

export default function CourseCategories() {
  const categories = [
    {
      icon: Code,
      title: "Programming & Development",
      description: "Master coding with modern frameworks",
      courses: "2,500+ courses",
      color: "from-orange-500 to-red-500",
      students: "450k+",
      trending: true,
    },
    {
      icon: Palette,
      title: "Design & Creative",
      description: "Create stunning visual experiences",
      courses: "1,800+ courses",
      color: "from-red-500 to-pink-500",
      students: "320k+",
    },
    {
      icon: TrendingUp,
      title: "Business & Marketing",
      description: "Drive growth with strategic insights",
      courses: "1,200+ courses",
      color: "from-pink-500 to-purple-500",
      students: "280k+",
    },
    {
      icon: Brain,
      title: "Data Science & AI",
      description: "Unlock the power of data",
      courses: "900+ courses",
      color: "from-purple-500 to-indigo-500",
      students: "190k+",
      trending: true,
    },
    {
      icon: Camera,
      title: "Digital Media",
      description: "Create compelling content",
      courses: "750+ courses",
      color: "from-indigo-500 to-blue-500",
      students: "150k+",
    },
    {
      icon: Music,
      title: "Emerging Technologies",
      description: "Stay ahead of the curve",
      courses: "600+ courses",
      color: "from-blue-500 to-cyan-500",
      students: "120k+",
      trending: true,
    },
  ]

  return (
    <section className="py-24 relative bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="bg-gray-800 text-orange-300 border border-gray-700 backdrop-blur-sm px-4 py-2 mb-6">
            <Layers className="w-4 h-4 mr-2" />
            Explore Categories
          </Badge>
          <h2 className="text-5xl font-bold text-white mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Learning Path
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover cutting-edge courses designed by industry experts and tailored for real-world success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-gray-900/50 backdrop-blur-xl border border-gray-800 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 hover:-translate-y-3 cursor-pointer"
            >
              {category.trending && (
                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs px-2 py-1 z-10">
                  🔥 Trending
                </Badge>
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-200 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{category.description}</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">{category.courses}</span>
                    <span className="text-orange-300 font-semibold">{category.students} students</span>
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full text-orange-300 hover:text-white hover:bg-orange-500/20 group-hover:bg-orange-500/30 transition-all duration-300"
                  >
                    Explore Courses
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
