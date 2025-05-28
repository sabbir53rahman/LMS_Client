"use client"
import { Book, LayoutDashboard, PlusCircle, PlayCircle, Target } from "lucide-react"
import Link from "next/link"
import { useSelector } from "react-redux"

export default function Sidebar() {
  const user = useSelector((state) => state.user.user)
  console.log(user)
  const role = user?.role

  const commonLinks = [
    {
      name: "Course Listing",
      path: "/dashboard/courseListing",
      icon: <Book />,
    },
  ]

  const studentLinks = [
    {
      name: "Enrolled Course",
      path: "/dashboard/enrollCourse",
      icon: <Book />,
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard />,
    },
  ]

  const teacherLinks = [
    {
      name: "Add New Lesson",
      path: "/dashboard/addLesson",
      icon: <PlusCircle />,
    },
    {
      name: "My Courses ",
      path: "/dashboard/myCourse",
      icon: <PlayCircle />,
    },
    {
      name: "Add New Course",
      path: "/dashboard/addCourse",
      icon: <PlusCircle />,
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard />,
    },
  ]

  return (
    <div className="w-64 min-h-screen bg-black border-r border-gray-800 text-white shadow-2xl flex flex-col relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-500/10 to-pink-500/10 rounded-full blur-2xl"></div>

      {/* Sidebar Header */}
      <div className="p-6 relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/25">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              SkillNest
            </span>
            <div className="text-xs text-orange-300">Dashboard</div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-2 p-4 relative z-10">
        {/* Common Links */}
        {commonLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className="group flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-red-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10 border border-transparent hover:border-orange-500/30 backdrop-blur-sm"
          >
            <div className="group-hover:scale-110 transition-transform duration-300">{link.icon}</div>
            <span className="font-medium">{link.name}</span>
          </Link>
        ))}

        {/* Role-Based Links */}
        {role === "student" &&
          studentLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="group flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-red-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10 border border-transparent hover:border-orange-500/30 backdrop-blur-sm"
            >
              <div className="group-hover:scale-110 transition-transform duration-300">{link.icon}</div>
              <span className="font-medium">{link.name}</span>
            </Link>
          ))}

        {role === "teacher" &&
          teacherLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="group flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-red-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10 border border-transparent hover:border-orange-500/30 backdrop-blur-sm"
            >
              <div className="group-hover:scale-110 transition-transform duration-300">{link.icon}</div>
              <span className="font-medium">{link.name}</span>
            </Link>
          ))}
      </nav>

      {/* User Role Badge */}
      <div className="mt-auto p-4 relative z-10">
        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">{user?.name?.charAt(0)?.toUpperCase() || "U"}</span>
            </div>
            <div>
              <div className="text-white font-semibold text-sm">{user?.name || "User"}</div>
              <div className="text-orange-300 text-xs capitalize">{role || "Student"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
