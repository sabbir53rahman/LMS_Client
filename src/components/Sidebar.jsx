"use client";
import { useState } from "react";
import { Book, LayoutDashboard, PlusCircle, PlayCircle } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const user = useSelector((state) => state.user.user);
  console.log(user)
  const role = user?.role;

  const commonLinks = [
    {
      name: "Course Listing",
      path: "/dashboard/courseListing",
      icon: <Book />,
    },
  ];

  const studentLinks = [
    {
      name: "Enrolled Course",
      path: "/dashboard/enrollCourse",
      icon: <Book />,
    },
    {
      name: "Student Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard />,
    },
  ];

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
      name: "Teacher Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard />,
    },
  ];

  return (
    <div className="w-64 min-h-screen bg-[#1a1a2e] text-white shadow-lg flex flex-col">
      {/* Sidebar Header */}
      <div className="p-6 text-xl font-bold tracking-wide">EduPlatform</div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-2 p-4">
        {/* Common Links */}
        {commonLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-[#48BEF7] transition-all duration-300"
          >
            {link.icon}
            {link.name}
          </Link>
        ))}

        {/* Role-Based Links */}
        {role === "student" &&
          studentLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-[#48BEF7] transition-all duration-300"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}

        {role === "teacher" &&
          teacherLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-[#48BEF7] transition-all duration-300"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
      </nav>
    </div>
  );
}
