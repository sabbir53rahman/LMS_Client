"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Filter } from "lucide-react";
import { Skeleton } from "antd";
import { useGetAllCoursesQuery } from "@/redux/features/courseSlice/courseSlice";

const categories = [
  "All",
  "Web Development",
  "Programming",
  "Design",
  "Data Science",
];

export default function CourseListing() {
  const { data: courses = [], isLoading, isError } = useGetAllCoursesQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses = courses.filter(
    (course) =>
      (selectedCategory === "All" || course.category === selectedCategory) &&
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderSkeletonCards = () => {
    return Array.from({ length: 6 }).map((_, index) => (
      <div
        key={index}
        className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4"
      >
        <Skeleton.Image style={{ width: "100%", height: 200 }} active />
        <Skeleton active paragraph={{ rows: 2 }} className="mt-4" />
      </div>
    ));
  };

  return (
    <div className="bg-[#F9FAFB] px-6 pt-[100px] py-12">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center text-[#2D2E32] mb-8">
          Explore Courses
        </h1>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
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

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {renderSkeletonCards()}
          </div>
        )}

        {/* Error State */}
        {isError && (
          <p className="text-center text-red-500">Failed to load courses.</p>
        )}

        {/* Courses Grid */}
        {!isLoading && !isError && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <Link
                  href={`/dashboard/courseListing/${course._id}`}
                  key={course._id}
                  className="group bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg overflow-hidden transition-transform hover:-translate-y-1 duration-300"
                >
                  <div className="relative w-full h-52">
                    <Image
                      src={course.thumbnail || "/images/default-course.jpg"}
                      alt={course.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-2xl"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <span className="text-sm font-medium text-[#48BEF7] bg-[#E0F7FF] px-3 py-1 rounded-full inline-block">
                      {course.category || "General"}
                    </span>
                    <h2 className="text-lg font-semibold text-[#2D2E32] group-hover:text-[#48BEF7] transition">
                      {course.title}
                    </h2>
                    <p className="text-gray-600 font-bold text-md">
                      {course.price ? `$${course.price}` : "Free"}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* No Results Message */}
            {filteredCourses.length === 0 && (
              <p className="text-center text-gray-500 mt-8">
                No courses found.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
