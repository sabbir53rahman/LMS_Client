"use client";
import { useSelector } from "react-redux";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useGetEnrollmentsByUserQuery } from "@/redux/features/enrollSlice/enrollSlice";

const EnrollmentsPage = () => {
  const user = useSelector((state) => state.user.user);
  const { data, isLoading, isError } = useGetEnrollmentsByUserQuery(user?._id);

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader2 className="animate-spin h-10 w-10 text-blue-500" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 mt-20">
        Something went wrong. Please try again later.
      </div>
    );
  }

  const enrollments = data?.enrollments || [];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">
        Your Enrolled Courses
      </h1>

      {enrollments.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven&apos;t enrolled in any courses yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {enrollments.map((enrollment) => {
            const course = enrollment.course || {};
            return (
              <Link
                key={enrollment._id}
                href={`/dashboard/courseListing/${course._id}`}
                className="group bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg overflow-hidden transition-transform hover:-translate-y-1 duration-300"
              >
                <div className="relative w-full h-52">
                  <Image
                    src={course.thumbnail || "/images/default-course.jpg"}
                    alt={course.title || "Course Thumbnail"}
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
                    {course.title || "Untitled Course"}
                  </h2>
                  <p className="text-gray-600 font-bold text-md">
                    {course.price ? `$${course.price}` : "Free"}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default EnrollmentsPage;
