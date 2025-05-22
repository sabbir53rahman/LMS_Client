import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useGetTeacherEarningsQuery } from "@/redux/features/courseSlice/courseSlice";
import { useGetLastEnrollmentsOfTeacherQuery } from "@/redux/features/enrollSlice/enrollSlice";

const TeacherDashboard = ({ teacherId }) => {
  const { data: earnings, isLoading: earningsLoading } =
    useGetTeacherEarningsQuery(teacherId);

  const { data: enrollments, isLoading: enrollmentsLoading } =
    useGetLastEnrollmentsOfTeacherQuery(teacherId);

  // Group enrollments by course title to count number of enrollments per course
  const enrollmentChartData = React.useMemo(() => {
    if (!enrollments) return [];
    const grouped = enrollments.reduce((acc, enrollment) => {
      const title = enrollment.course?.title || "Unknown";
      const existing = acc.find((item) => item.courseName === title);
      if (existing) {
        existing.enrolledCount += 1;
      } else {
        acc.push({ courseName: title, enrolledCount: 1 });
      }
      return acc;
    }, []);
    return grouped;
  }, [enrollments]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8 md:p-16 font-sans">
      <h1 className="text-4xl font-extrabold mb-10 text-blue-900 drop-shadow-md">
        Teacher Dashboard
      </h1>

      {/* Earnings Card */}
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-lg p-8 mb-12 border border-blue-200 hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center gap-3">
          <svg
            className="w-7 h-7 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 8c-1.657 0-3 1.343-3 3a3 3 0 006 0c0-1.657-1.343-3-3-3z" />
            <path d="M12 2v2m0 16v2m8-10h2M2 12H4m15.364-6.364l1.414 1.414M4.222 19.778l1.414-1.414M19.778 19.778l-1.414-1.414M4.222 4.222l1.414 1.414" />
          </svg>
          Total Earnings
        </h2>
        {earningsLoading ? (
          <p className="text-gray-500 text-center">Loading earnings...</p>
        ) : (
          <p className="text-5xl font-bold text-green-600 text-center">
            ${earnings?.totalEarnings?.toLocaleString() || 0}
          </p>
        )}
      </div>

      {/* Enrollment Chart Card */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-8 border border-blue-200 hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6 flex items-center gap-3">
          <svg
            className="w-7 h-7 text-blue-500"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 3v18h18" />
            <path d="M3 9h18M9 21V9" />
          </svg>
          Last 10 Enrollments
        </h2>

        {enrollmentsLoading ? (
          <p className="text-gray-500 text-center">Loading enrollments...</p>
        ) : enrollmentChartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={350}>
            <BarChart
              data={enrollmentChartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
              <XAxis
                dataKey="courseName"
                tick={{ fill: "#1e40af", fontWeight: "600", fontSize: 12 }}
                interval={0}
                angle={-30}
                textAnchor="end"
              />
              <YAxis
                allowDecimals={false}
                tick={{ fill: "#1e40af", fontWeight: "600" }}
              />
              <Tooltip
                contentStyle={{ backgroundColor: "#f0f9ff", borderRadius: 8 }}
                itemStyle={{ color: "#2563eb", fontWeight: "600" }}
              />
              <Bar
                dataKey="enrolledCount"
                fill="#3b82f6"
                barSize={40}
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-500 text-center">
            No enrollment data available.
          </p>
        )}
      </div>
    </div>
  );
};

export default TeacherDashboard;
