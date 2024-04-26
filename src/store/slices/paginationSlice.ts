import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getArrayOfNumbers } from "../../helpFunc/getArrayNumbers";

interface IPaginationState {
  totalCount: number;
  pages: number[];
  currentPage: number;
}

const PAGE = 10

export const initialState: IPaginationState = {
  totalCount: 0,
  pages: [1],
  currentPage: 1,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState: initialState,
  reducers: {
    setPages(state, action: PayloadAction<{ totalCount: number }>) {
      const { totalCount } = action.payload;
      state.totalCount = totalCount;
      state.pages = getArrayOfNumbers(Math.ceil(totalCount / PAGE));
      console.log('sp', state.pages);
    },
    setCurrentPage(state, action: PayloadAction<{ currentPage: number }>) {
      state.currentPage = action.payload.currentPage;
    },
  },
});

export const { setPages, setCurrentPage } = paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer;
