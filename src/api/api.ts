import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import type { ISearchUsers } from "../interface";
import { BASE_URL } from "../constants/url";

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["User"],
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
  }),
});

export const { useGetAuthLoginMutation } = mainApi;
