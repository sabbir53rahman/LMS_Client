"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import {
  useGetCourseByIdQuery,
  useDeleteCourseMutation,
} from "@/redux/features/courseSlice/courseSlice";

import {
  useEnrollCourseMutation,
  useGetEnrollmentsByUserQuery,
  useUpdateProgressMutation,
} from "@/redux/features/enrollSlice/enrollSlice";

import { PlayCircle, CheckCircle } from "lucide-react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function CourseDetails() {
  const { id } = useParams();
  const router = useRouter();

  const {
    data: courseData,
    isLoading,
    isError,
    refetch,
  } = useGetCourseByIdQuery(id);

  const [deleteCourse, { isLoading: isDeleting }] = useDeleteCourseMutation();
  const [enrollCourse] = useEnrollCourseMutation();
  const [updateProgress] = useUpdateProgressMutation();

  const user = useSelector((state) => state.user.user);
  const userRole = user?.role || "guest";

  // Query enrollments only for students with userId
  const { data: enrollments, isLoading: isEnrollmentsLoading } =
    useGetEnrollmentsByUserQuery(user?._id, {
      skip: !user?._id || userRole !== "student",
    });

  const [isEnrolled, setIsEnrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (courseData && userRole === "student") {
      const enrolled = Array.isArray(enrollments)
        ? enrollments.some((enroll) => enroll.course?._id === courseData._id)
        : false;
      setIsEnrolled(enrolled);
  
      if (enrolled) {
        const enrollment = Array.isArray(enrollments)
          ? enrollments.find((enroll) => enroll.course?._id === courseData._id)
          : null;
  
        if (enrollment?.progress) {
          setProgress(enrollment.progress);
        } else {
          const completedLessons =
            courseData.lessons?.filter((l) => l.completed).length || 0;
          const totalLessons = courseData.lessons?.length || 1;
          setProgress((completedLessons / totalLessons) * 100);
        }
      } else {
        setProgress(0);
      }
    }
  }, [courseData, enrollments, userRole]);
  

  const handleEnroll = async () => {
    try {
      await enrollCourse({
        userId: user._id,
        courseId: courseData._id,
      }).unwrap();
      setIsEnrolled(true);
    } catch (error) {
      console.error("Enrollment failed:", error);
      alert("Something went wrong. Try again later.");
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this course? This action cannot be undone."
    );
    if (confirmed) {
      try {
        await deleteCourse(courseData._id).unwrap();
        alert("Course deleted successfully!");
        router.push("/dashboard");
      } catch (error) {
        console.error("Failed to delete course:", error);
        alert("You're not authorized to delete this course.");
      }
    }
  };

  const handleLessonClick = async (lessonId) => {
    if (userRole === "student") {
      try {
        await updateProgress({
          userId: user._id,
          courseId: courseData._id,
          lessonId: lessonId,
        }).unwrap();
        refetch();
      } catch (error) {
        console.error("Progress update failed:", error);
      }
    }
  };

  const loadingIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;

  if (isLoading || isEnrollmentsLoading)
    return (
      <div className="flex flex-col justify-center items-center h-screen gap-4">
        <Spin indicator={loadingIcon} />
        <p className="text-gray-600 text-lg font-medium">
          Fetching course details...
        </p>
      </div>
    );

  if (isError || !courseData)
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold text-red-500">
        Failed to load course.
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Course Image */}
        <div className="relative w-full h-72">
          {courseData.thumbnail ? (
            <Image
              src={courseData.thumbnail}
              alt={courseData.title}
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

        {/* Course Details */}
        <div className="p-8">
          <h1 className="text-4xl font-extrabold text-gray-900">
            {courseData.title}
          </h1>
          <p className="text-gray-600 mt-4">{courseData.description}</p>
          {courseData.teacher?.name && (
            <p className="mt-4 text-lg font-semibold text-gray-800">
              Instructor:{" "}
              <span className="text-[#48BEF7]">{courseData.teacher.name}</span>
            </p>
          )}

          {/* Progress Bar */}
          {userRole === "student" && isEnrolled && (
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

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-4">
            {userRole === "guest" && (
              <p className="text-red-500 font-semibold">
                Login to enroll and access full course.
              </p>
            )}

            {userRole === "student" && !isEnrolled && (
              <button
                onClick={handleEnroll}
                className="px-6 py-3 bg-[#48BEF7] text-white text-lg rounded-lg font-semibold hover:bg-blue-600 transition"
              >
                Enroll Now
              </button>
            )}

            {userRole === "student" && isEnrolled && (
              <span className="text-green-600 font-semibold text-lg">
                ✅ Enrolled
              </span>
            )}

            {userRole === "teacher" && (
              <>
                <Link
                  href={`/edit-course/${courseData._id}`}
                  className="px-6 py-3 bg-green-600 text-white text-lg rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  Edit Course
                </Link>
                <button
                  onClick={handleDelete}
                  className="px-6 py-3 bg-red-600 text-white text-lg rounded-lg font-semibold hover:bg-red-700 transition"
                  disabled={isDeleting}
                >
                  {isDeleting ? "Deleting..." : "Delete Course"}
                </button>
              </>
            )}
          </div>

          {/* Lessons */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800">Lessons</h2>
            <ul className="mt-6 space-y-4">
              {courseData.lessons && courseData.lessons.length > 0 ? (
                courseData.lessons.map((lesson) => (
                  <li
                    key={lesson._id}
                    className="flex items-center justify-between p-4 rounded-lg border bg-gray-100 border-gray-300"
                  >
                    <div className="flex items-center gap-4">
                      {lesson.completed ? (
                        <CheckCircle className="text-green-500" />
                      ) : (
                        <PlayCircle className="text-blue-500" />
                      )}
                      <span className="font-medium text-gray-900">
                        {lesson.title}
                      </span>
                    </div>
                    <Link
                      href={`/dashboard/lesson/${lesson._id}`}
                      onClick={() => handleLessonClick(lesson._id)}
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Watch
                    </Link>
                  </li>
                ))
              ) : (
                <p className="text-center text-gray-500">No lessons available</p>
              )}
            </ul>
          </div>

          {/* Add Lesson Button */}
          {userRole === "teacher" && (
            <div className="mt-10">
              <Link
                href={`/dashboard/addLesson/${courseData._id}`}
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
