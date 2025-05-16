"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useGetLessonsByCourseQuery } from "@/redux/features/lessonSlice/lessonSlice";

export default function LessonDetails() {
  const { id } = useParams();
  console.log(id)
  const { data: lessonData, isLoading, isError } = useGetLessonsByCourseQuery(id);
  console.log(lessonData)

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError || !lessonData || lessonData.length === 0)
    return <p className="text-center text-red-500">No lessons found.</p>;

  return (
    <section className="container mx-auto px-4 py-10 max-w-4xl">
      {lessonData.map((lesson) => (
        <div key={lesson._id} className="mb-12">
          <h1 className="text-3xl font-bold mb-6">{lesson.title}</h1>

          <div className="aspect-w-16 aspect-h-9 mb-6">
            <iframe
              src={lesson.videoUrl}
              title="Lesson Video"
              className="w-full h-full rounded-lg shadow-lg"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          <div className="text-sm text-gray-500">
            <p>Lesson ID: {lesson._id}</p>
            <p>Course ID: {lesson.course}</p>
            <p>Created At: {new Date(lesson.createdAt).toLocaleString()}</p>
            <p>Updated At: {new Date(lesson.updatedAt).toLocaleString()}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
