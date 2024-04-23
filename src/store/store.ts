import { configureStore } from "@reduxjs/toolkit";
// import { searchUsersApi } from "../services/searchUsersApi";
// import { sortReducer } from "./slices/sortSlice";
// import { paginationReducer } from "./slices/paginationSlice";
import { mainApi } from "../api/api";
import { userReducer } from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    // sort: sortReducer,
    // pagination: paginationReducer,
    [mainApi.reducerPath]: mainApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
