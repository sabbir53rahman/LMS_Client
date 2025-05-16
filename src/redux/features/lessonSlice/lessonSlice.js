import { apiSlice } from "../apiSlice/apiSlice";


export const lessonApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Get lessons by course ID
    getLessonsByCourse: builder.query({
      query: (courseId) => `/lessons/${courseId}`,
      providesTags: (result, error, courseId) => [{ type: "Lesson", id: courseId }],
    }),

    // Add a new lesson
    addLesson: builder.mutation({
      query: (lessonData) => ({
        url: "/lessons",
        method: "POST",
        body: lessonData,
      }),
      invalidatesTags: ["Lesson"],
    }),
  }),
});

export const {
  useGetLessonsByCourseQuery,
  useAddLessonMutation,
} = lessonApi;
