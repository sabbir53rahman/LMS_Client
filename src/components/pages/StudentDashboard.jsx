"use client";
import React from "react";
import { useSelector } from "react-redux";
import {
  useGetEnrollmentsByUserQuery,
  useGetRecentProgressByUserQuery,
} from "@/redux/features/enrollSlice/enrollSlice";
import { Loader2 } from "lucide-react";
import { Progress, Card } from "antd";
import Image from "next/image";
import Link from "next/link";

function StudentDashboard() {
  const user = useSelector((state) => state.user.user);

  const {
    data: enrollmentData,
    isLoading: isLoadingEnrollments,
    isError: isErrorEnrollments,
  } = useGetEnrollmentsByUserQuery(user?._id);

  const {
    data: recentProgress,
    isLoading: isLoadingProgress,
    isError: isErrorProgress,
  } = useGetRecentProgressByUserQuery(user?._id);
  console.log(recentProgress);

  if (isLoadingEnrollments || isLoadingProgress) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader2 className="animate-spin h-10 w-10 text-blue-500" />
      </div>
    );
  }

  if (
    isErrorEnrollments ||
    isErrorProgress ||
    !enrollmentData ||
    !recentProgress
  ) {
    return (
      <div className="text-center text-red-500 mt-20">
        Failed to load data. Please try again later.
      </div>
    );
  }

  const totalSpent = enrollmentData.totalSpent || 0;

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-10">
        Welcome, {user?.name || "Student"}!
      </h1>

      {/* Total Spent Section */}
      <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-6 text-center mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Total Spent on Courses
        </h2>
        <p className="text-4xl font-bold text-blue-600">${totalSpent}</p>
        <p className="text-gray-500 mt-2">
          This reflects your total enrollment investment.
        </p>
      </div>

      {/* Recent Progress Section */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Your Recent Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recentProgress.map((course) => (
          <Link
            key={course.courseId}
            href={`/dashboard/courseListing/${course.courseId}`}
            passHref
            legacyBehavior
          >
            <a>
              <Card
                title={course.title}
                bordered={true}
                className="rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    width={80}
                    height={60}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <p className="text-gray-600 text-sm">
                      Lessons Completed: {course.completedLessons} /{" "}
                      {course.totalLessons}
                    </p>
                    <Progress percent={course.percentage} size="small" />
                  </div>
                </div>
              </Card>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default StudentDashboard;
