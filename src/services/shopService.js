import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { base_url } from '../firebase/database';

export const shopApi = createApi({
  reducerPath: 'shopApi',
  tagTypes: ['orders'],
  baseQuery: fetchBaseQuery({ baseUrl: base_url}),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products.json`
    }),
    getProductById: builder.query({
      query: (id) => `products.json?orderBy="id"&equalTo=${id}`
    }),
    getProductsByCategory: builder.query({
      query: (categoryId) => `products.json?orderBy="categoryId"&equalTo=${categoryId}`
    }),
    getCategories: builder.query({
      query: () => `categories.json`
    }),
    postOrder: builder.mutation({
      query: ({...order}) => ({
        url: 'orders.json',
        method: 'POST',
        body: order
      }),
      invalidatesTags: ['orders'],
    }),
    getOrders: builder.query({
      query: () => `orders.json`,
      providesTags: [ 'orders' ]
    }),
  })
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetProductsByCategoryQuery,
  useGetCategoriesQuery,
  usePostOrderMutation,
  useGetOrdersQuery
 } = shopApi;