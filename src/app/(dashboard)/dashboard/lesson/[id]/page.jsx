"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { useGetLessonByIdQuery } from "@/redux/features/lessonSlice/lessonSlice";

export default function LessonDetails() {
  const { id } = useParams();
  const { data: lesson, isLoading, isError } = useGetLessonByIdQuery(id);
  const [userRole, setUserRole] = useState("student"); // Change based on auth logic
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    setLiked(true);
    setDisliked(false);
  };

  const handleDislike = () => {
    setDisliked(true);
    setLiked(false);
  };

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
    <div className="min-h-screen bg-gray-100 py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        {/* Video */}
        {lesson.videoUrl && (
          <div className="aspect-video w-full bg-black">
            <iframe
              src={lesson.videoUrl.replace("watch?v=", "embed/")}
              title="Lesson Video"
              className="w-full h-full rounded-t-xl"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {/* Details */}
        <div className="p-6 md:p-10 space-y-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            {lesson.title}
          </h1>

          {lesson.description && (
            <p className="text-gray-700 leading-relaxed text-lg">
              {lesson.description}
            </p>
          )}

          {lesson.teacher?.name && (
            <p className="text-lg text-gray-800">
              Instructor:{" "}
              <span className="text-[#48BEF7] font-semibold">
                {lesson.teacher.name}
              </span>
            </p>
          )}

          {/* Like/Dislike Buttons */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition ${
                liked
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-100"
              }`}
            >
              <ThumbsUp size={20} />
              Like
            </button>

            <button
              onClick={handleDislike}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition ${
                disliked
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700 hover:bg-red-100"
              }`}
            >
              <ThumbsDown size={20} />
              Dislike
            </button>
          </div>

          {/* User Actions */}
          <div className="pt-8 flex flex-wrap gap-4 items-center justify-center">
            {userRole === "guest" && (
              <p className="text-red-500 font-semibold">
                Login to access full lesson.
              </p>
            )}

            {userRole === "student" && lesson.nextLessonId && (
              <Link
                href={`/lesson/${lesson.nextLessonId}`}
                className="px-6 py-3 bg-[#48BEF7] text-white text-lg rounded-lg font-semibold hover:bg-blue-600 transition"
              >
                Next Lesson
              </Link>
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
