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

import {
  useAddCommentMutation,
  useGetLessonCommentsQuery,
} from "@/redux/features/commentSlice/commentSlice";

export default function LessonDetails() {
  const { id } = useParams();
  const user = useSelector((state) => state.user.user);
  const [userRole, setUserRole] = useState("student");

  const [commentContent, setCommentContent] = useState("");
  const [addComment] = useAddCommentMutation();

  const {
    data: comments,
    isLoading: isCommentsLoading,
    refetch: refetchComments,
  } = useGetLessonCommentsQuery(id);

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

  const handleSubmitComment = async () => {
    if (!commentContent.trim()) return;

    try {
      await addComment({ lessonId: id, content: commentContent });
      setCommentContent("");
      refetchComments();
    } catch (err) {
      console.error("Failed to add comment:", err);
    }
  };

  const userReaction = userLike ? "like" : userDislike ? "dislike" : null;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading lesson...
      </div>
    );
  }

  if (isError || !lesson) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
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
              userReaction === "dislike"
                ? "bg-red-500 text-white"
                : "bg-gray-200"
            }`}
          >
            👎 Dislike
          </button>
        </div>

        {/* Comment Input */}
        {userRole !== "guest" && (
          <div className="pt-6">
            <textarea
              value={commentContent}
              onChange={(e) => setCommentContent(e.target.value)}
              placeholder="Write your comment..."
              className="w-full p-3 border rounded-md"
            />
            <button
              onClick={handleSubmitComment}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Submit Comment
            </button>
          </div>
        )}

        {/* Comments Section */}
        <div className="pt-8">
          <h2 className="text-xl font-semibold mb-4">Comments</h2>
          {isCommentsLoading ? (
            <p>Loading comments...</p>
          ) : comments && comments.length > 0 ? (
            <div className="space-y-4">
              {comments.map((comment) => (
                <div
                  key={comment._id}
                  className="p-4 border rounded-md bg-gray-50"
                >
                  <p className="text-sm text-gray-700">{comment.content}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    — {comment.user?.name || "Anonymous"}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}
        </div>

        {/* User-based Actions */}
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
