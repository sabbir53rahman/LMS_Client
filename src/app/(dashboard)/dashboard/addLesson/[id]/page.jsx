"use client";

import React, { useState } from "react";
import { useAddLessonMutation } from "@/redux/features/lessonSlice/lessonSlice";
import { useParams, useRouter } from "next/navigation";

const AddLessonPage = () => {
  const { id: courseId } = useParams();
  console.log("Params from useParams:", courseId);

  const router = useRouter();

  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [description, setDescription] = useState("");

  const [addLesson, { isLoading }] = useAddLessonMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addLesson({
        course: courseId,
        title,
        videoUrl,
      }).unwrap();

      alert("Lesson added successfully!");
      router.push(`/dashboard/courseListing/${courseId}`);
    } catch (error) {
      console.error("Failed to add lesson:", error);
      alert("Failed to add lesson. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-16 p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
        Add New Lesson
      </h2>
      <p className="text-gray-500 text-center mb-6">
        Fill in the details below to add a new lesson
      </p>
      <hr className="mb-6" />

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Lesson Title<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter lesson title"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Video URL
          </label>
          <input
            type="url"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="https://youtube.com/..."
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-200 disabled:opacity-60"
          >
            {isLoading ? "Adding..." : "Add Lesson"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddLessonPage;
