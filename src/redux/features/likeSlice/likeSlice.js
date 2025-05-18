import { apiSlice } from "../apiSlice/apiSlice";


export const likeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Add a like
    addLike: builder.mutation({
      query: ({ lessonId, userId }) => ({
        url: "/likes/like",
        method: "POST",
        body: { lessonId, userId },
      }),
      invalidatesTags: (result, error, { lessonId }) => [
        { type: "Like", id: lessonId },
      ],
    }),

    // Add a dislike
    addDislike: builder.mutation({
      query: ({ lessonId, userId }) => ({
        url: "/likes/dislike",
        method: "POST",
        body: { lessonId, userId },
      }),
      invalidatesTags: (result, error, { lessonId }) => [
        { type: "Like", id: lessonId },
      ],
    }),

    // Get like by lessonId and userId
    getLike: builder.query({
      query: ({ lessonId, userId }) => ({
        url: `/likes/like?lessonId=${lessonId}&userId=${userId}`,
      }),
      providesTags: (result, error, { lessonId }) => [
        { type: "Like", id: lessonId },
      ],
    }),

    // Get dislike by lessonId and userId
    getDislike: builder.query({
      query: ({ lessonId, userId }) => ({
        url: `/likes/dislike?lessonId=${lessonId}&userId=${userId}`,
      }),
      providesTags: (result, error, { lessonId }) => [
        { type: "Like", id: lessonId },
      ],
    }),

    // Get all likes for a lesson
    getAllLikes: builder.query({
      query: (lessonId) => `/likes/likes/${lessonId}`,
      providesTags: (result, error, lessonId) => [
        { type: "Like", id: lessonId },
      ],
    }),

    // Get all dislikes for a lesson
    getAllDislikes: builder.query({
      query: (lessonId) => `/likes/dislikes/${lessonId}`,
      providesTags: (result, error, lessonId) => [
        { type: "Like", id: lessonId },
      ],
    }),

    // Remove like by lessonId and userId
    removeLike: builder.mutation({
      query: ({ lessonId, userId }) => ({
        url: `/likes/like?lessonId=${lessonId}&userId=${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { lessonId }) => [
        { type: "Like", id: lessonId },
      ],
    }),

    // Remove dislike by lessonId and userId
    removeDislike: builder.mutation({
      query: ({ lessonId, userId }) => ({
        url: `/likes/dislike?lessonId=${lessonId}&userId=${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { lessonId }) => [
        { type: "Like", id: lessonId },
      ],
    }),
  }),
});

export const {
  useAddLikeMutation,
  useAddDislikeMutation,
  useGetLikeQuery,
  useGetDislikeQuery,
  useGetAllLikesQuery,
  useGetAllDislikesQuery,
  useRemoveLikeMutation,
  useRemoveDislikeMutation,
} = likeApi;
