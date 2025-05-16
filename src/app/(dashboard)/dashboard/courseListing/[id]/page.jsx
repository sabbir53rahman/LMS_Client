"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { PlayCircle, CheckCircle } from "lucide-react";
import { useGetLessonByIdQuery } from "@/redux/features/lessonSlice/lessonSlice";

export default function LessonDetails() {
  const { id } = useParams();
  const { data: lesson, isLoading, isError } = useGetLessonByIdQuery(id);
  const [userRole, setUserRole] = useState("student"); 
  const [isEnrolled, setIsEnrolled] = useState(false);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold text-gray-600">
        Loading...
      </div>
    );
  }

  if (isError || !lesson) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold text-red-500">
        Failed to load lesson.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Lesson Thumbnail */}
        <div className="relative w-full h-64">
          {lesson.thumbnail ? (
            <Image
              src={lesson.thumbnail}
              alt={lesson.title}
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

        {/* Lesson Details */}
        <div className="p-8">
          <h1 className="text-3xl font-extrabold text-gray-900">
            {lesson.title}
          </h1>

          {lesson.description && (
            <p className="text-gray-600 mt-4">{lesson.description}</p>
          )}

          {/* Show video if available */}
          {lesson.videoUrl && (
            <div className="mt-6 aspect-video w-full">
              <iframe
                src={lesson.videoUrl}
                title="Lesson Video"
                className="w-full h-full rounded-lg"
                allowFullScreen
              ></iframe>
            </div>
          )}

          {/* Teacher info if available */}
          {lesson.teacher?.name && (
            <p className="mt-4 text-lg font-semibold text-gray-800">
              Instructor:{" "}
              <span className="text-[#48BEF7]">{lesson.teacher.name}</span>
            </p>
          )}

          {/* User Actions */}
          <div className="mt-8 flex flex-wrap gap-4">
            {userRole === "guest" && (
              <p className="text-red-500 font-semibold">
                Login to access full lesson.
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
                href={`/edit-lesson/${lesson._id}`}
                className="px-6 py-3 bg-green-600 text-white text-lg rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Edit Lesson
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
