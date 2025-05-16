"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Filter } from "lucide-react";

// Sample course data
const coursesData = [
  {
    id: 1,
    title: "React for Beginners",
    category: "Web Development",
    image: "/images/react-course.jpg",
    price: "$49",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    category: "Programming",
    image: "/images/js-course.jpg",
    price: "$59",
  },
  {
    id: 3,
    title: "UI/UX Design",
    category: "Design",
    image: "/images/uiux-course.jpg",
    price: "$39",
  },
  {
    id: 4,
    title: "Python for Data Science",
    category: "Data Science",
    image: "/images/python-course.jpg",
    price: "$69",
  },
  {
    id: 5,
    title: "React for Beginners",
    category: "Web Development",
    image: "/images/react-course.jpg",
    price: "$49",
  },
  {
    id: 6,
    title: "Advanced JavaScript",
    category: "Programming",
    image: "/images/js-course.jpg",
    price: "$59",
  },
  {
    id: 7,
    title: "UI/UX Design",
    category: "Design",
    image: "/images/uiux-course.jpg",
    price: "$39",
  },
  {
    id: 8,
    title: "Python for Data Science",
    category: "Data Science",
    image: "/images/python-course.jpg",
    price: "$69",
  },
];

// Categories for filter dropdown
const categories = [
  "All",
  "Web Development",
  "Programming",
  "Design",
  "Data Science",
];

export default function Course() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses = coursesData.filter(
    (course) =>
      (selectedCategory === "All" || course.category === selectedCategory) &&
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#F9FAFB] pb-16">
      {/* Banner */}
      <div className="bg-[#48BEF7] text-white pt-[150px] py-16 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-2">Explore Our Courses</h1>
        <p className="text-lg font-light max-w-xl mx-auto">
          Discover top-quality courses designed to enhance your skills and
          accelerate your learning journey.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12">
        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
          {/* Search */}
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

          {/* Filter */}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <Link
              href={`/course-details/${course.id}`}
              key={course.id}
              className="group bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg overflow-hidden transition-transform hover:-translate-y-1 duration-300"
            >
              <div className="relative w-full h-52">
                <Image
                  src={course.image}
                  alt={course.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
              </div>
              <div className="p-5 space-y-2">
                <span className="text-sm font-medium text-[#48BEF7] bg-[#E0F7FF] px-3 py-1 rounded-full inline-block">
                  {course.category}
                </span>
                <h2 className="text-lg font-semibold text-[#2D2E32] group-hover:text-[#48BEF7] transition">
                  {course.title}
                </h2>
                <p className="text-gray-600 font-bold text-md">
                  {course.price}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results Message */}
        {filteredCourses.length === 0 && (
          <p className="text-center text-gray-500 mt-10 text-lg">
            No courses found.
          </p>
        )}
      </div>
    </div>
  );
}
