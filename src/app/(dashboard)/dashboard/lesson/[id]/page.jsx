"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useGetLessonsByCourseQuery } from "@/redux/features/lessonSlice/lessonSlice";
import { data } from "autoprefixer";

export default function LessonDetails() {
  const { id } = useParams();
  const { data: lessonData, isLoading, isError } = useGetLessonsByCourseQuery(id);
  console.log(data)

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError || !lessonData)
    return <p className="text-center text-red-500">Failed to load lesson.</p>;

  return (
    <section className="container mx-auto px-4 py-10 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">{lessonData.title}</h1>

      <div className="aspect-w-16 aspect-h-9 mb-6">
        <iframe
          src={lessonData.videoUrl}
          title="Lesson Video"
          className="w-full h-full rounded-lg shadow-lg"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="text-sm text-gray-500">
        <p>Lesson ID: {lessonData._id}</p>
        <p>Course ID: {lessonData.course}</p>
        <p>Created At: {new Date(lessonData.createdAt).toLocaleString()}</p>
        <p>Updated At: {new Date(lessonData.updatedAt).toLocaleString()}</p>
      </div>
    </section>
  );
}
