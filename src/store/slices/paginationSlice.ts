import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getArrayOfNumbers } from "../../helpFunc/getArrayNumbers";

interface IPaginationState {
  totalCount: number;
  pages: number[];
  currentPage: number;
  pageSize: string;
}

export const initialState: IPaginationState = {
  totalCount: 0,
  pages: [1],
  currentPage: 1,
  pageSize: '10',
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState: initialState,
  reducers: {
    setPages(state, action: PayloadAction<{ totalCount: number }>) {
      const { totalCount } = action.payload;
      state.totalCount = totalCount;
      state.pages = getArrayOfNumbers(Math.ceil(totalCount / Number(state.pageSize)));
      console.log("sp", state.pages);
    },
    setCurrentPage(state, action: PayloadAction<{ currentPage: number }>) {
      state.currentPage = action.payload.currentPage;
    },
    setPageSize(state, action: PayloadAction<{ pageSize: string }>) {
      state.pageSize = action.payload.pageSize;
    },
  },
});

export const { setPages, setCurrentPage, setPageSize } = paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer;
