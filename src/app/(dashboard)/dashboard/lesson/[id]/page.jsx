"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useSelector } from "react-redux";

import { useGetLessonByIdQuery } from "@/redux/features/lessonSlice/lessonSlice";
import {
  useAddLikeMutation,
  useAddDislikeMutation,
  useRemoveLikeMutation,
  useRemoveDislikeMutation,
  useGetLikeQuery,
  useGetDislikeQuery,
} from "@/redux/features/likeSlice/likeSlice";

export default function LessonDetails() {
  const { id } = useParams();
  const user = useSelector((state) => state.user.user);
  const [userRole, setUserRole] = useState("student");

  useEffect(() => {
    if (!user) {
      setUserRole("guest");
    } else if (user.role === "teacher") {
      setUserRole("teacher");
    } else {
      setUserRole("student");
    }
  }, [user]);

  const { data: lesson, isLoading, isError } = useGetLessonByIdQuery(id);

  const { data: userLike, refetch: refetchLike } = useGetLikeQuery(
    { lessonId: id, userId: user?._id },
    { skip: !user?._id }
  );

  const { data: userDislike, refetch: refetchDislike } = useGetDislikeQuery(
    { lessonId: id, userId: user?._id },
    { skip: !user?._id }
  );

  const [addLike] = useAddLikeMutation();
  const [addDislike] = useAddDislikeMutation();
  const [removeLike] = useRemoveLikeMutation();
  const [removeDislike] = useRemoveDislikeMutation();

  const handleReaction = async (reactionType) => {
    if (!user?._id) return alert("Please login to react.");

    try {
      if (reactionType === "like") {
        if (userLike) {
          await removeLike({ lessonId: id, userId: user._id });
        } else {
          await addLike({ lessonId: id, userId: user._id });
          if (userDislike) {
            await removeDislike({ lessonId: id, userId: user._id });
          }
        }
      } else if (reactionType === "dislike") {
        if (userDislike) {
          await removeDislike({ lessonId: id, userId: user._id });
        } else {
          await addDislike({ lessonId: id, userId: user._id });
          if (userLike) {
            await removeLike({ lessonId: id, userId: user._id });
          }
        }
      }

      refetchLike();
      refetchDislike();
    } catch (err) {
      console.error("Reaction error:", err);
    }
  };

  const userReaction = userLike ? "like" : userDislike ? "dislike" : null;

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading lesson...</div>;
  }

  if (isError || !lesson) {
    return <div className="flex justify-center items-center h-screen text-red-500">Failed to load lesson.</div>;
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
            Instructor: <span className="text-[#48BEF7] font-medium">{lesson.teacher.name}</span>
          </p>
        )}

        {/* Description */}
        {lesson.description && <p className="text-gray-700">{lesson.description}</p>}

        {/* Reaction Buttons */}
        <div className="flex items-center gap-4 pt-4">
          <button
            onClick={() => handleReaction("like")}
            className={`px-4 py-2 rounded ${
              userReaction === "like" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            👍 Like
          </button>
          <button
            onClick={() => handleReaction("dislike")}
            className={`px-4 py-2 rounded ${
              userReaction === "dislike" ? "bg-red-500 text-white" : "bg-gray-200"
            }`}
          >
            👎 Dislike
          </button>
        </div>

        {/* User-based Actions */}
        <div className="pt-6">
          {userRole === "guest" && (
            <p className="text-red-500 font-semibold">Please login to continue.</p>
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
