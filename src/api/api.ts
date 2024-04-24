import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants/url";
import { IItems } from "../inteface/type";
import { RootState } from "../store/store";

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const accessToken = (getState() as RootState).user.accessToken;
      if (accessToken) {
        headers.set("Authorization", `${accessToken}`);
      }
      return headers;
    },
  }),

  tagTypes: ["User", "Items"],
  endpoints: (builder) => ({
    getAuthLogin: builder.mutation<
      {
        access_token: string;
      },
      { login: string; password: string }
    >({
      query: (args) => ({
        url: "auth/login",
        method: "POST",
        body: args,
      }),
      invalidatesTags: () => [{ type: "User", id: "ID" }],
    }),

    getItems: builder.query<IItems, null>({
      query: () => ({
        url: "wh/items?page=1&pageSize=10",
        method: "GET",
      }),
      providesTags: () => [{ type: "Items", id: "id" }],
    }),
  }),
});

export const { useGetAuthLoginMutation, useGetItemsQuery, useLazyGetItemsQuery } = mainApi;
