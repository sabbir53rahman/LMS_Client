"use client";

import React from "react";
import { useSelector } from "react-redux";
import {
  useGetEnrollmentsByUserQuery,
  useGetRecentProgressByUserQuery,
} from "@/redux/features/enrollSlice/enrollSlice";
import {
  BookOpen,
  DollarSign,
  GraduationCap,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "antd";

function StudentDashboard() {
  const user = useSelector((state) => state.user.user);
  const [progressValues, setProgressValues] = React.useState({});

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

  // Animate progress bars on load
  React.useEffect(() => {
    if (recentProgress) {
      // Start with 0 for animation
      const initialValues = {};
      recentProgress.forEach((course) => {
        initialValues[course.courseId] = 0;
      });
      setProgressValues(initialValues);

      // Animate to actual values
      const timer = setTimeout(() => {
        const actualValues = {};
        recentProgress.forEach((course) => {
          actualValues[course.courseId] = course.percentage;
        });
        setProgressValues(actualValues);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [recentProgress]);

  if (isLoadingEnrollments || isLoadingProgress) {
    return (
      <div className="min-h-screen bg-black flex justify-center items-center">
        <div className="text-orange-400 text-xl font-semibold animate-pulse flex items-center gap-3">
          <div className="w-8 h-8 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
          Loading your dashboard...
        </div>
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
      <div className="min-h-screen bg-black flex justify-center items-center">
        <div className="text-red-500 text-xl font-semibold">
          Failed to load data. Please try again later.
        </div>
      </div>
    );
  }

  const totalSpent = enrollmentData.totalSpent || 0;

  return (
    <div className="min-h-screen bg-black py-12 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border border-orange-500/30 px-4 py-2 mb-6">
            <GraduationCap className="w-4 h-4 mr-2" />
            Student Dashboard
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome,{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              {user?.name || "Student"}
            </span>
            !
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Track your learning progress and manage your course enrollments
          </p>
        </div>

        {/* Total Spent Section */}
        <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 shadow-2xl mb-12">
          <CardContent className="p-8 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mb-4">
              <DollarSign className="w-8 h-8 text-orange-400" />
            </div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Total Investment in Learning
            </h2>
            <p className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
              ${totalSpent}
            </p>
            <p className="text-gray-400">
              This reflects your commitment to personal growth and education
            </p>
          </CardContent>
        </Card>

        {/* Recent Progress Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-orange-400" />
              Your Learning Progress
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentProgress.map((course) => (
              <Card
                key={course.courseId}
                className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 shadow-xl hover:shadow-orange-500/10 transition-all duration-300 hover:scale-[1.02] group"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {course.completedLessons} of {course.totalLessons} lessons
                    completed
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-gray-700 flex-shrink-0">
                      <Image
                        src={
                          course.thumbnail ||
                          "/placeholder.svg?height=80&width=80"
                        }
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-300">Progress</span>
                        <span className="text-sm font-medium text-orange-400">
                          {course.percentage}%
                        </span>
                      </div>
                      <Progress
                        percent={progressValues[course.courseId] || 0}
                        showInfo={false}
                        strokeColor={{
                          from: "#f97316", 
                          to: "#ef4444", 
                        }}
                        trailColor="#1f2937" 
                      />
                    </div>
                  </div>

                  <Link href={`/dashboard/courseListing/${course.courseId}`}>
                    <Button
                      variant="outline"
                      className="w-full bg-gray-800/50 border-gray-700 text-gray-300 hover:bg-orange-500/20 hover:text-orange-300 hover:border-orange-500/30 transition-all duration-300"
                    >
                      Continue Learning
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* No Courses Message */}
        {recentProgress.length === 0 && (
          <Card className="bg-gray-900/30 backdrop-blur-xl border border-gray-800 shadow-xl">
            <CardContent className="p-8 text-center">
              <BookOpen className="w-12 h-12 text-orange-400/50 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                No Courses Yet
              </h3>
              <p className="text-gray-400 mb-6">
                You haven&apos;t enrolled in any courses yet. Start your
                learning journey today!
              </p>
              <Link href="/courses">
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-6 py-2 h-auto rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/25">
                  Browse Courses
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

export default StudentDashboard;
