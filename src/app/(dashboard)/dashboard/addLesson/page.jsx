"use client";
import { useGetAllCoursesQuery } from "@/redux/features/courseSlice/courseSlice";
import { useAddLessonMutation } from "@/redux/features/lessonSlice/lessonSlice";
import React, { useState } from "react";

const AddLesson = () => {
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [courseId, setCourseId] = useState("");

  const { data: courses, isLoading: coursesLoading } = useGetAllCoursesQuery();
  const [addLesson, { isLoading: addingLesson }] = useAddLessonMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !courseId) return alert("Title and course are required");

    try {
      await addLesson({ title, videoUrl, course: courseId }).unwrap();
      alert("Lesson added successfully!");
      setTitle("");
      setVideoUrl("");
      setCourseId("");
    } catch (error) {
      console.error("Failed to add lesson:", error);
      alert("Failed to add lesson");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-16 p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Add New Lesson</h2>
      <p className="text-gray-500 text-center mb-6">Fill in the details below to add a new lesson</p>
      <hr className="mb-6" />

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Lesson Title<span className="text-red-500">*</span></label>
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
          <label className="block text-gray-700 font-medium mb-1">Video URL</label>
          <input
            type="url"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="https://youtube.com/..."
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Select Course<span className="text-red-500">*</span></label>
          {coursesLoading ? (
            <div className="text-gray-500">Loading courses...</div>
          ) : (
            <select
              value={courseId}
              onChange={(e) => setCourseId(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">-- Select a Course --</option>
              {courses?.map((course) => (
                <option key={course._id} value={course._id}>
                  {course.title}
                </option>
              ))}
            </select>
          )}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={addingLesson}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-200 disabled:opacity-60"
          >
            {addingLesson ? "Adding..." : "Add Lesson"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddLesson;
