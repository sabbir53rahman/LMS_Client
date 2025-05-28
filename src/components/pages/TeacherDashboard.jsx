"use client"

import React, { useMemo } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"
import { useGetTeacherEarningsQuery } from "@/redux/features/courseSlice/courseSlice"
import { useGetLastEnrollmentsOfTeacherQuery } from "@/redux/features/enrollSlice/enrollSlice"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DollarSign,
  Users,
  BookOpen,
  TrendingUp,
  BarChart3,
  Loader2,
} from "lucide-react"

const TeacherDashboard = ({ teacherId }) => {
  const { data: earnings, isLoading: earningsLoading } = useGetTeacherEarningsQuery(teacherId)
  const { data: enrollments, isLoading: enrollmentsLoading } = useGetLastEnrollmentsOfTeacherQuery(teacherId)

  const enrollmentChartData = useMemo(() => {
    if (!enrollments) return []
    const grouped = enrollments.reduce((acc, enrollment) => {
      const title = enrollment.course?.title || "Unknown"
      const existing = acc.find((item) => item.courseName === title)
      if (existing) {
        existing.enrolledCount += 1
      } else {
        acc.push({ courseName: title, enrolledCount: 1 })
      }
      return acc
    }, [])
    return grouped
  }, [enrollments])

  const totalEnrollments = enrollments?.length || 0
  const totalCourses = enrollmentChartData.length
  const averageEnrollmentsPerCourse = totalCourses > 0 ? Math.round(totalEnrollments / totalCourses) : 0

  return (
    <div className="min-h-screen bg-black py-12 px-6 relative overflow-hidden">
      <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <Badge className="bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border border-orange-500/30 px-4 py-2 mb-6">
            <BarChart3 className="w-4 h-4 mr-2" /> Analytics
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-4">
            Teacher <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Dashboard</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Track your teaching performance and student engagement</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Total Earnings */}
          <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">Total Earnings</p>
                  {earningsLoading ? (
                    <div className="flex items-center gap-2 mt-2">
                      <Loader2 className="w-4 h-4 text-orange-400 animate-spin" />
                      <span className="text-gray-300">Loading...</span>
                    </div>
                  ) : (
                    <p className="text-3xl font-bold text-white mt-2">
                      ${earnings?.totalEarnings?.toLocaleString() || 0}
                    </p>
                  )}
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Total Enrollments */}
          <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">Total Enrollments</p>
                  {enrollmentsLoading ? (
                    <div className="flex items-center gap-2 mt-2">
                      <Loader2 className="w-4 h-4 text-orange-400 animate-spin" />
                      <span className="text-gray-300">Loading...</span>
                    </div>
                  ) : (
                    <p className="text-3xl font-bold text-white mt-2">{totalEnrollments}</p>
                  )}
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Active Courses */}
          <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">Active Courses</p>
                  <p className="text-3xl font-bold text-white mt-2">{totalCourses}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Average Enrollments */}
          <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">Avg. per Course</p>
                  <p className="text-3xl font-bold text-white mt-2">{averageEnrollmentsPerCourse}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chart */}
        <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
              <BarChart3 className="w-6 h-6 text-orange-400" /> Course Enrollments
            </CardTitle>
            <p className="text-gray-400">Recent enrollment activity by course</p>
          </CardHeader>
          <CardContent>
            {enrollmentsLoading ? (
              <div className="flex items-center justify-center h-80">
                <Loader2 className="w-6 h-6 text-orange-400 animate-spin mr-2" />
                <span className="text-gray-300">Loading chart data...</span>
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={350}>
                <BarChart
                  data={enrollmentChartData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis
                    dataKey="courseName"
                    tick={{ fill: "#9ca3af", fontWeight: "500", fontSize: 12 }}
                    interval={0}
                    angle={-30}
                    textAnchor="end"
                  />
                  <YAxis allowDecimals={false} tick={{ fill: "#9ca3af", fontWeight: "500" }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1f2937",
                      border: "1px solid #374151",
                      borderRadius: "12px",
                      color: "#ffffff",
                    }}
                    itemStyle={{ color: "#f97316", fontWeight: "600" }}
                  />
                  <Bar dataKey="enrolledCount" fill="url(#barGradient)" barSize={40} radius={[8, 8, 0, 0]} />
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#fb923c" />
                      <stop offset="100%" stopColor="#ef4444" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default TeacherDashboard
