"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useGetLessonByIdQuery } from "@/redux/features/lessonSlice/lessonSlice";

export default function LessonDetails() {
  const { id } = useParams();
  const { data: lesson, isLoading, isError } = useGetLessonByIdQuery(id);
  const [userRole, setUserRole] = useState("student"); // Change this for testing: "guest", "student", "teacher"

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-gray-600">
        Loading lesson...
      </div>
    );
  }

  if (isError || !lesson) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-red-500">
        Failed to load lesson.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 space-y-6">

        {/* Video */}
        {lesson.videoUrl && (
          <div className="aspect-video w-full rounded-md overflow-hidden">
            <iframe
              src={lesson.videoUrl.replace("watch?v=", "embed/")}
              title="Lesson Video"
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        )}

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800">{lesson.title}</h1>

        {/* Instructor */}
        {lesson.teacher?.name && (
          <p className="text-gray-600">
            Instructor:{" "}
            <span className="text-[#48BEF7] font-medium">
              {lesson.teacher.name}
            </span>
          </p>
        )}

        {/* Description */}
        {lesson.description && (
          <p className="text-gray-700">{lesson.description}</p>
        )}

        {/* Buttons */}
        <div className="pt-6">
          {userRole === "guest" && (
            <p className="text-red-500 font-semibold">
              Please login to continue.
            </p>
          )}

          {userRole === "student" && lesson.nextLessonId && (
            <Link
              href={`/lesson/${lesson.nextLessonId}`}
              className="inline-block px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Next Lesson
            </Link>
          )}

          {userRole === "teacher" && (
            <Link
              href={`/edit-lesson/${lesson._id}`}
              className="inline-block px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
            >
              Edit Lesson
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
