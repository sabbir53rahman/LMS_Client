"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useGetCourseByIdQuery } from "@/redux/features/courseSlice/courseSlice";
import { PlayCircle, CheckCircle } from "lucide-react";

export default function CourseDetails() {
  const { id } = useParams();
  const { data: courseData, isLoading, isError } = useGetCourseByIdQuery(id);
  const [userRole, setUserRole] = useState("student"); // or 'teacher', 'guest'
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (courseData) {
      // Example logic: students are enrolled by default, teachers are not
      setIsEnrolled(userRole === "student");
      const completedLessons =
        courseData.lessons?.filter((l) => l.completed).length || 0;
      const totalLessons = courseData.lessons?.length || 1;
      setProgress((completedLessons / totalLessons) * 100);
    }
  }, [courseData, userRole]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold text-gray-600">
        Loading...
      </div>
    );

  if (isError || !courseData)
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold text-red-500">
        Failed to load course.
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Course Image */}
        <div className="relative w-full h-72">
          {courseData.thumbnail ? (
            <Image
              src={courseData.thumbnail}
              alt={courseData.title}
              fill
              className="object-cover rounded-t-lg"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-lg rounded-t-lg">
              No Thumbnail
            </div>
          )}
        </div>

        {/* Course Details */}
        <div className="p-8">
          <h1 className="text-4xl font-extrabold text-gray-900">
            {courseData.title}
          </h1>
          <p className="text-gray-600 mt-4">{courseData.description}</p>
          {courseData.teacher?.name && (
            <p className="mt-4 text-lg font-semibold text-gray-800">
              Instructor:{" "}
              <span className="text-[#48BEF7]">{courseData.teacher.name}</span>
            </p>
          )}

          {/* Progress Bar (For Students) */}
          {userRole === "student" && (
            <div className="mt-6">
              <p className="text-gray-700 font-semibold mb-2">Progress:</p>
              <div className="bg-gray-200 h-3 rounded-full overflow-hidden">
                <div
                  className="bg-[#48BEF7] h-3 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Enrollment & Teacher Actions */}
          <div className="mt-8 flex flex-wrap gap-4">
            {userRole === "guest" && (
              <p className="text-red-500 font-semibold">
                Login to enroll and access full course.
              </p>
            )}

            {userRole === "student" && !isEnrolled && (
              <button
                className="px-6 py-3 bg-[#48BEF7] text-white text-lg rounded-lg font-semibold hover:bg-blue-600 transition"
                onClick={() => setIsEnrolled(true)}
              >
                Enroll Now
              </button>
            )}

            {userRole === "teacher" && (
              <Link
                href={`/edit-course/${courseData._id}`}
                className="px-6 py-3 bg-green-600 text-white text-lg rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Edit Course
              </Link>
            )}
          </div>

          {/* Lesson List */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800">Lessons</h2>
            <ul className="mt-6 space-y-4">
              {courseData.lessons && courseData.lessons.length > 0 ? (
                courseData.lessons.map((lesson) => (
                  <li
                    key={lesson._id}
                    className="flex items-center justify-between p-4 rounded-lg border bg-gray-100 border-gray-300"
                  >
                    <div className="flex items-center gap-4">
                      {lesson.completed ? (
                        <CheckCircle className="text-green-500" />
                      ) : (
                        <PlayCircle className="text-blue-500" />
                      )}
                      <span className="font-medium text-gray-900">
                        {lesson.title}
                      </span>
                    </div>
                    <Link
                      href={`/dashboard/lesson/${lesson._id}`}
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Watch
                    </Link>
                  </li>
                ))
              ) : (
                <p className="text-center text-gray-500">
                  No lessons available
                </p>
              )}
            </ul>
          </div>

          {/* Teacher Actions */}
          {userRole === "teacher" && (
            <div className="mt-10">
              <Link
                href={`/dashboard/addLesson/${courseData._id}`}
                className="px-6 py-3 bg-purple-600 text-white text-lg rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                Add New Lesson
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
