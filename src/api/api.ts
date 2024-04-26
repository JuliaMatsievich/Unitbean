import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants/url";
import { IItem, IItemForm, IItems } from "../interface/type";
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

    getItems: builder.query<
      IItems,
      { page: number; pageSize: number; sortOrder: string }
    >({
      query: (arg) => ({
        url: `wh/items?page=${arg.page}&pageSize=${arg.pageSize}&sortOrder=${arg.sortOrder}`,
        method: "GET",
      }),
      providesTags: () => [{ type: "Items", id: "id" }],
    }),

    getItemsSearch: builder.query<
      IItems,
      { page: number; pageSize: number; itemName: string; sortOrder: string }
    >({
      query: (arg) => ({
        url: `wh/items?page=${arg.page}&pageSize=${arg.pageSize}&itemName=${arg.itemName}&sortOrder=${arg.sortOrder}`,
        method: "GET",
      }),
      providesTags: () => [{ type: "Items", id: "id" }],
    }),

    addItem: builder.mutation<IItem, IItemForm>({
      query: (args) => ({
        url: "wh/items",
        method: "POST",
        body: args,
      }),
      invalidatesTags: () => [{ type: "Items", id: "id" }],
    }),

    editItemById: builder.mutation<
      IItem,
      {
        name: string;
        description: string;
        measurement_units: string;
        code: string;
        id: string;
      }
    >({
      query: (args) => ({
        url: `wh/items/${args.id}`,
        method: "PATCH",
        body: {
          name: args.name,
          description: args.description,
          measurement_units: args.measurement_units,
          code: args.code,
        },
      }),
      invalidatesTags: () => [{ type: "Items", id: "id" }],
    }),
  }),
});

export const {
  useGetAuthLoginMutation,
  useGetItemsQuery,
  useLazyGetItemsQuery,
  useAddItemMutation,
  useEditItemByIdMutation,
  useGetItemsSearchQuery,
  useLazyGetItemsSearchQuery,
} = mainApi;
