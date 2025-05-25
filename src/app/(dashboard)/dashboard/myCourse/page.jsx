"use client";

import Link from "next/link";
import Image from "next/image";
import { useGetCoursesByUserQuery } from "@/redux/features/courseSlice/courseSlice";
import { useSelector } from "react-redux";
import { Skeleton } from "antd";

export default function CourseListing() {
  const user = useSelector((state) => state.user.user);
  const {
    data: courses,
    isLoading,
    isError,
  } = useGetCoursesByUserQuery(user?._id);

  const coursesArray = Array.isArray(courses) ? courses : [];
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
    <div className="bg-[#F9FAFB] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#2D2E32] mb-8">
          All My Courses
        </h1>

        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {renderSkeletonCards()}
          </div>
        )}

        {isError && (
          <p className="text-center text-red-500">Failed to load courses.</p>
        )}

        {!isLoading && !isError && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {coursesArray.map((course) => (
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

            {coursesArray.length === 0 && (
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
