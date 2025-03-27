"use client";
import { useState } from "react";
import { Book, LayoutDashboard, PlusCircle, PlayCircle } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const [role] = useState("teacher"); // Change this to "student" to test role-based links

  const commonLinks = [
    {
      name: "Course Listing",
      path: "/dashboard/courseListing",
      icon: <Book />,
    },
    {
      name: "Course Details",
      path: "/dashboard/courseDetails",
      icon: <PlayCircle />,
    },
    {
      name: "Add New Course",
      path: "/dashboard/addCourse",
      icon: <PlusCircle />,
    },
  ];

  const studentLinks = [
    {
      name: "Student Dashboard",
      path: "/dashboard/student-dashboard",
      icon: <LayoutDashboard />,
    },
  ];

  const teacherLinks = [
    {
      name: "Add New Lesson",
      path: "/dashboard/add-lesson",
      icon: <PlusCircle />,
    },
    {
      name: "Teacher Dashboard",
      path: "/dashboard/teacher-dashboard",
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
