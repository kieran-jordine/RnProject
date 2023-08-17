import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/posts',
  }),
  endpoints: builder => ({
    getPost: builder.query<Post, number>({
      query: id => ({url: `/${id}`}),
    }),
    getPosts: builder.query<Post[], void>({
      query: () => '', // ({url: ''})
    }),
    addPost: builder.mutation<Post, Partial<Post>>({
      query(body) {
        return {
          url: '',
          method: 'POST',
          body,
        };
      },
      //  transformResponse: (response: {data: Post}, _, __) => response.data,
    }),
    updatePost: builder.mutation<Post, Partial<Post> & Pick<Post, 'id'>>({
      query: ({id, ...patch}) => ({
        url: `/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      //  transformResponse: (response: {data: Post}, _, __) => response.data,
    }),
    deletePost: builder.mutation<Post, number>({
      query: id => ({url: `/${id}`, method: 'DELETE'}),
    }),
  }),
});

// hooks generated based on endpoints
export const {
  useGetPostQuery,
  useGetPostsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApi;
