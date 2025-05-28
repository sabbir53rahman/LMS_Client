import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Star,
  Play,
  Users,
  BookOpen,
  Target,
  ArrowRight,
  Zap,
  Brain,
  Code,
  Palette,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const courses = [
    {
      title: "AI & Machine Learning",
      level: "Advanced",
      students: "15.2k",
      rating: "4.9",
      color: "from-orange-500 to-red-500",
      icon: Brain,
    },
    {
      title: "Full Stack Development",
      level: "Intermediate",
      students: "23.1k",
      rating: "4.8",
      color: "from-red-500 to-pink-500",
      icon: Code,
    },
    {
      title: "UI/UX Design",
      level: "Beginner",
      students: "18.7k",
      rating: "4.9",
      color: "from-pink-500 to-purple-500",
      icon: Palette,
    },
    {
      title: "Data Science",
      level: "Advanced",
      students: "12.4k",
      rating: "4.7",
      color: "from-purple-500 to-indigo-500",
      icon: TrendingUp,
    },
  ];

  const stats = [
    { number: "2M+", label: "Global Learners", icon: Users },
    { number: "10k+", label: "Expert Courses", icon: BookOpen },
    { number: "98%", label: "Success Rate", icon: Target },
  ];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - 3D Course Cards */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transform md:rotate-3 hover:rotate-0 transition-transform duration-700">
              {courses.map((course, index) => (
                <Card
                  key={index}
                  className={`group relative overflow-hidden bg-gray-900/50 backdrop-blur-xl border border-gray-800 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                    index % 2 === 0 ? "mt-8" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-6 relative z-10">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${course.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <course.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-orange-200 transition-colors">
                      {course.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                      <Badge className="bg-gray-800 text-gray-200 border-0">
                        {course.level}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {course.students}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-3 h-3 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <span className="text-gray-300 text-sm">
                        {course.rating}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-red-400 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
          </div>

          {/* Right Side - Enhanced Content */}
          <div className="text-white space-y-8 relative z-10">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border border-orange-500/30 backdrop-blur-sm px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                #1 Skill Development Platform
              </Badge>

              <h1 className="text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                  Master
                </span>{" "}
                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                  Every
                </span>
                <br />
                <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Skill
                </span>
              </h1>

              <p className="text-2xl text-gray-300 leading-relaxed font-light">
                Build your expertise with{" "}
                <span className="text-orange-400 font-semibold">
                  industry-leading courses
                </span>
                , expert mentorship, and hands-on projects that matter.
              </p>
            </div>

            {/* Modern Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 border border-gray-800 backdrop-blur-sm">
                    <stat.icon className="w-8 h-8 text-orange-300" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-6">
              <Link href="/courses">
                <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 group">
                  Explore Courses
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-2 border-gray-600 text-black hover:bg-gray-800 px-8 py-4 rounded-2xl text-lg font-semibold backdrop-blur-sm group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-6 border border-gray-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <Avatar
                      key={i}
                      className="w-12 h-12 border-2 border-gray-700"
                    >
                      <AvatarImage
                        src={`/placeholder.svg?height=48&width=48&text=${i}`}
                      />
                      <AvatarFallback className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                        U{i}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full border-2 border-gray-700 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">2M+</span>
                  </div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">
                    Join millions of learners
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <span className="text-gray-300">
                      4.9/5 from 50k+ reviews
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                &quot;SkillNest transformed my career. I went from junior to
                senior developer in 6 months!&quot; -{" "}
                <span className="text-orange-300">
                  Sarah K., Software Engineer
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
