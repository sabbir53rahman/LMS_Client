import { apiSlice } from "../apiSlice/apiSlice";

export const courseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCourses: builder.query({
      query: () => "/courses",
      providesTags: ["Course"],
    }),

    getCourseById: builder.query({
      query: (id) => `/courses/${id}`,
      providesTags: (result, error, id) => [{ type: "Course", id }],
    }),

    getTeacherEarnings: builder.query({
      query: (teacherId) => `/courses/earnings/${teacherId}`,
      providesTags: (result, error, teacherId) => [
        { type: "Earnings", id: teacherId },
      ],
    }),

    createCourse: builder.mutation({
      query: (newCourse) => ({
        url: "/courses",
        method: "POST",
        body: newCourse,
      }),
      invalidatesTags: ["Course"],
    }),

    getCoursesByUser: builder.query({
      query: (userId) => `/courses/user/${userId}`,
      providesTags: (result, error, userId) => [{ type: "Course", id: userId }],
    }),

    getLastEnrollments: builder.query({
      query: (teacherId) => `/courses/last-enrollments/${teacherId}`,
      providesTags: (result, error, teacherId) => [
        { type: "Enrollment", id: teacherId },
      ],
    }),

    deleteCourse: builder.mutation({
      query: (courseId) => ({
        url: `/courses/${courseId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Course"],
    }),
  }),
});

export const {
  useGetAllCoursesQuery,
  useGetCourseByIdQuery,
  useCreateCourseMutation,
  useGetCoursesByUserQuery,
  useGetTeacherEarningsQuery,
  useGetLastEnrollmentsQuery,
  useDeleteCourseMutation,
} = courseApi;
