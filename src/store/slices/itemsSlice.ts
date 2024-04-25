import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { searchItemsFunc } from "../../helpFunc/searchFunction";
import { IItem } from "../../inteface/type";

interface ItemsState {
  filteredItems: IItem[];
  isShowModal: boolean;
  modalName: string;
}

const initialState: ItemsState = {
  filteredItems: [],
  isShowModal: false,
  modalName: "",
};

export const itemsSlice = createSlice({
  name: "items",
  initialState: initialState,
  reducers: {
    searchItems(
      state,
      action: PayloadAction<{ items: IItem[]; searchValue: string }>
    ) {
      const { items, searchValue } = action.payload;
      state.filteredItems = searchItemsFunc(items, searchValue);
    },

    showModal(state, action: PayloadAction<{ modalName: string }>) {
      state.isShowModal = !state.isShowModal;
      state.modalName = action.payload.modalName;
    },
  },
});

export const { searchItems, showModal } = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;