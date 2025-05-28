import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Play, Users, Clock, Heart, Award, Infinity } from "lucide-react";
import Link from "next/link";

export default function FeaturedCourses() {
  const courses = [
    {
      title: "Complete AI & Machine Learning Bootcamp",
      instructor: "Dr. Sarah Chen",
      company: "Former Google AI",
      price: "$149.99",
      originalPrice: "$299.99",
      rating: 4.9,
      students: "25,847",
      duration: "52 hours",
      level: "Beginner to Expert",
      bestseller: true,
      updated: "2024",
      skills: ["Python", "TensorFlow", "Neural Networks", "Deep Learning"],
    },
    {
      title: "Full Stack Web Development Mastery",
      instructor: "Alex Rodriguez",
      company: "Senior Dev at Meta",
      price: "$129.99",
      originalPrice: "$249.99",
      rating: 4.8,
      students: "18,923",
      duration: "48 hours",
      level: "Intermediate",
      skills: ["React", "Node.js", "MongoDB", "AWS"],
    },
    {
      title: "Advanced UI/UX Design System",
      instructor: "Emma Thompson",
      company: "Design Lead at Apple",
      price: "$99.99",
      originalPrice: "$199.99",
      rating: 4.9,
      students: "12,456",
      duration: "35 hours",
      level: "Advanced",
      skills: ["Figma", "Design Systems", "Prototyping", "User Research"],
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="bg-gradient-to-r from-orange-400/20 to-red-500/20 text-orange-300 border border-orange-500/30 backdrop-blur-sm px-4 py-2 mb-6">
            <Award className="w-4 h-4 mr-2" />
            Premium Selection
          </Badge>
          <h2 className="text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Bestselling
            </span>{" "}
            Courses
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hand-picked courses that have transformed thousands of careers
            worldwide
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-gray-900/50 backdrop-blur-xl border border-gray-800 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 hover:-translate-y-4"
            >
              {course.bestseller && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-2 text-sm font-bold z-10">
                  🏆 BESTSELLER
                </div>
              )}
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt={course.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2">
                  <Heart className="w-5 h-5 text-white hover:text-red-400 cursor-pointer transition-colors" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-4 text-white text-sm mb-2">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                    <span className="mx-2">•</span>
                    <Users className="w-4 h-4" />
                    {course.students}
                  </div>
                </div>
                <Button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 rounded-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Play className="w-6 h-6" />
                </Button>
              </div>

              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-200 transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  <div className="text-sm text-gray-400">
                    by{" "}
                    <span className="text-orange-300 font-semibold">
                      {course.instructor}
                    </span>
                    <div className="text-xs text-gray-500">
                      {course.company}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">
                      {course.rating}
                    </span>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-orange-500/20 text-orange-300 border-0"
                  >
                    {course.level}
                  </Badge>
                  {course.updated && (
                    <Badge className="bg-green-500/20 text-green-300 border-0 text-xs">
                      Updated {course.updated}
                    </Badge>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {course.skills.slice(0, 3).map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className="bg-gray-800 text-gray-200 border-0 text-xs hover:bg-gray-700 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                  {course.skills.length > 3 && (
                    <Badge className="bg-gray-800 text-gray-200 border-0 text-xs">
                      +{course.skills.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-white">
                      {course.price}
                    </span>
                    <span className="text-gray-500 line-through text-sm">
                      {course.originalPrice}
                    </span>
                    <Badge className="bg-red-500/20 text-red-300 border-0 text-xs">
                      50% OFF
                    </Badge>
                  </div>
                  <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl">
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/courses">
            <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-12 py-4 text-lg rounded-2xl shadow-2xl shadow-orange-500/25">
              Browse All Courses
              <Infinity className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
