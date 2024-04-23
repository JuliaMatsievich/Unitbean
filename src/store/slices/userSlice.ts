import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface userState {
  accessToken: string | null;
  isAuth: boolean;
}

const initialState: userState = {
  accessToken: localStorage.getItem("access_token"),
  isAuth: Boolean(localStorage.getItem("isAuth")),
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setToken(
      state,
      action: PayloadAction<{ accessToken: string }>
    ) {
      const { accessToken} = action.payload;
      state.accessToken = accessToken;
      localStorage.setItem("access_token", accessToken);
      localStorage.setItem("isAuth", "true");
    },
    // setLogout(state) {
    //   localStorage.removeItem("access_token");
    //   localStorage.removeItem("isAuth");
    //   state.accessToken = null;
    // },
  },
});

export const { setToken } = userSlice.actions;
export const userReducer = userSlice.reducer;
