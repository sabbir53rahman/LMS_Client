"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PlayCircle, Lock, CheckCircle } from "lucide-react"; // Icons for better UI

const courseData = {
  id: 1,
  title: "React for Beginners",
  description:
    "Master the fundamentals of React with hands-on projects and best practices.",
  teacher: "John Doe",
  image: "/images/react-course.jpg",
  lessons: [
    { id: 1, title: "Introduction to React", free: true, completed: true },
    { id: 2, title: "Components & Props", free: false, completed: false },
    { id: 3, title: "State & Lifecycle", free: false, completed: false },
    { id: 4, title: "Hooks & Context API", free: false, completed: false },
  ],
};

export default function CourseDetails() {
  const [userRole, setUserRole] = useState("teacher"); // Change to 'student' or 'teacher' to test different views
  const [isEnrolled, setIsEnrolled] = useState(userRole === "student");
  const [progress, setProgress] = useState(
    (courseData.lessons.filter((l) => l.completed).length /
      courseData.lessons.length) *
      100
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Course Image */}
        <div className="relative w-full h-72">
          <Image
            src={courseData.image}
            alt={courseData.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>

        {/* Course Details */}
        <div className="p-8">
          <h1 className="text-4xl font-extrabold text-gray-900">
            {courseData.title}
          </h1>
          <p className="text-gray-600 mt-4">{courseData.description}</p>
          <p className="mt-4 text-lg font-semibold text-gray-800">
            Instructor:{" "}
            <span className="text-[#48BEF7]">{courseData.teacher}</span>
          </p>

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
                href={`/edit-course/${courseData.id}`}
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
              {courseData.lessons.map((lesson) => (
                <li
                  key={lesson.id}
                  className={`flex items-center justify-between p-4 rounded-lg border ${
                    lesson.free || isEnrolled
                      ? "bg-gray-100 border-gray-300"
                      : "bg-gray-200 border-gray-400"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {lesson.completed ? (
                      <CheckCircle className="text-green-500" />
                    ) : lesson.free || isEnrolled ? (
                      <PlayCircle className="text-blue-500" />
                    ) : (
                      <Lock className="text-gray-500" />
                    )}
                    <span
                      className={`font-medium ${
                        lesson.free || isEnrolled
                          ? "text-gray-900"
                          : "text-gray-500"
                      }`}
                    >
                      {lesson.title}
                    </span>
                  </div>

                  {lesson.free || isEnrolled ? (
                    <Link
                      href={`/lesson/${lesson.id}`}
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Watch
                    </Link>
                  ) : (
                    <span className="text-gray-500">Locked</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Teacher Actions */}
          {userRole === "teacher" && (
            <div className="mt-10">
              <Link
                href={`/add-lesson/${courseData.id}`}
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
