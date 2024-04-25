import { configureStore } from "@reduxjs/toolkit";
import { paginationReducer } from "./slices/paginationSlice";
import { mainApi } from "../api/api";
import { userReducer } from "./slices/userSlice";
import { itemsReducer } from "./slices/itemsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    items: itemsReducer,
    pagination: paginationReducer,
    [mainApi.reducerPath]: mainApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
