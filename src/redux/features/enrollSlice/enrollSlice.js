// enrollApi.js
import { apiSlice } from "../apiSlice/apiSlice";

export const enrollApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Enroll in a course
    enrollCourse: builder.mutation({
      query: ({ userId, courseId }) => ({
        url: `/enroll`,
        method: "POST",
        body: { userId, courseId },
        credentials: "include",
      }),
      invalidatesTags: (result, error, { userId }) => [
        { type: "Enrollment", id: userId },
      ],
    }),

    // Get all enrollments
    getAllEnrollments: builder.query({
      query: () => ({
        url: `/enroll`,
        credentials: "include",
      }),
      providesTags: ["Enrollment"],
    }),

    // Get last 10 enrollments of a teacher
    getLastEnrollmentsOfTeacher: builder.query({
      query: (teacherId) => ({
        url: `/enroll/teacher/${teacherId}`,
        credentials: "include",
      }),
      providesTags: (result, error, teacherId) => [
        { type: "Enrollment", id: `teacher-${teacherId}` },
      ],
    }),

    // Get enrollments by user
    getEnrollmentsByUser: builder.query({
      query: (userId) => ({
        url: `/enroll/user/${userId}`,
        credentials: "include",
      }),
      providesTags: (result, error, userId) => [
        { type: "Enrollment", id: userId },
      ],
    }),

    updateProgress: builder.mutation({
      query: ({ userId, courseId, lessonId }) => ({
        url: `/enroll/progress/${userId}/${courseId}/${lessonId}`,
        method: "PATCH",
        credentials: "include",
      }),
      invalidatesTags: (result, error, { userId }) => [
        { type: "Enrollment", id: `recent-${userId}` },
        { type: "Enrollment", id: userId },
      ],
    }),

    getRecentProgressByUser: builder.query({
      query: (userId) => ({
        url: `/enroll/recent-progress/${userId}`,
        credentials: "include",
      }),
      providesTags: (result, error, userId) => [
        { type: "Enrollment", id: `recent-${userId}` },
      ],
    }),
  }),
});

export const {
  useEnrollCourseMutation,
  useGetAllEnrollmentsQuery,
  useGetEnrollmentsByUserQuery,
  useGetLastEnrollmentsOfTeacherQuery,
  useGetRecentProgressByUserQuery,
  useUpdateProgressMutation,
} = enrollApi;
