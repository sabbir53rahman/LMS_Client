"use client";
import React from "react";
import { useSelector } from "react-redux";
import { useGetEnrollmentsByUserQuery } from "@/redux/features/enrollSlice/enrollSlice";
import { Loader2 } from "lucide-react";

function StudentDashboard() {
  const user = useSelector((state) => state.user.user);
  const { data, isLoading, isError } = useGetEnrollmentsByUserQuery(user?._id);

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader2 className="animate-spin h-10 w-10 text-blue-500" />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="text-center text-red-500 mt-20">
        Failed to load data. Please try again later.
      </div>
    );
  }

  const totalSpent = data.totalSpent || 0;

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">
        Welcome, {user?.name || "Student"}!
      </h1>

      <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Total Spent on Courses
        </h2>
        <p className="text-4xl font-bold text-blue-600">${totalSpent}</p>
        <p className="text-gray-500 mt-2">
          This reflects your total enrollment investment.
        </p>
      </div>

      {/* You can extend this section with other stats like number of enrollments, etc. */}
    </div>
  );
}

export default StudentDashboard;
