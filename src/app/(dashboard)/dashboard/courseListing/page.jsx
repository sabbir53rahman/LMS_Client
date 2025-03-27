"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Filter } from "lucide-react";

const coursesData = [
  {
    id: 1,
    title: "React for Beginners",
    category: "Web Development",
    image: "/images/react-course.jpg",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    category: "Programming",
    image: "/images/js-course.jpg",
  },
  {
    id: 3,
    title: "UI/UX Design",
    category: "Design",
    image: "/images/uiux-course.jpg",
  },
  {
    id: 4,
    title: "Python for Data Science",
    category: "Data Science",
    image: "/images/python-course.jpg",
  },
  {
    id: 5,
    title: "React for Beginners",
    category: "Web Development",
    image: "/images/react-course.jpg",
  },
  {
    id: 6,
    title: "Advanced JavaScript",
    category: "Programming",
    image: "/images/js-course.jpg",
  },
  {
    id: 7,
    title: "UI/UX Design",
    category: "Design",
    image: "/images/uiux-course.jpg",
  },
  {
    id: 8,
    title: "Python for Data Science",
    category: "Data Science",
    image: "/images/python-course.jpg",
  },
];

const categories = [
  "All",
  "Web Development",
  "Programming",
  "Design",
  "Data Science",
];

export default function CourseListing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses = coursesData.filter(
    (course) =>
      (selectedCategory === "All" || course.category === selectedCategory) &&
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#F9FAFB] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center text-[#2D2E32] mb-8">
          Explore Courses
        </h1>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
          {/* Search Bar */}
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white shadow-md text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#48BEF7] pl-12"
            />
            <Search className="absolute left-4 top-3 text-gray-500" />
          </div>

          {/* Category Filter */}
          <div className="relative w-full md:w-1/3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white shadow-md text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#48BEF7] appearance-none cursor-pointer"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <Filter className="absolute right-4 top-3 text-gray-500" />
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Link
              href={`/course-details/${course.id}`}
              key={course.id}
              className="group bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105"
            >
              <div className="relative w-full h-48">
                <Image
                  src={course.image}
                  alt={course.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4 bg-[#FFFFFF]">
                <h2 className="text-xl font-semibold text-[#2D2E32] group-hover:text-[#48BEF7]">
                  {course.title}
                </h2>
                <p className="text-gray-500">{course.category}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results Message */}
        {filteredCourses.length === 0 && (
          <p className="text-center text-gray-500 mt-8">No courses found.</p>
        )}
      </div>
    </div>
  );
}
