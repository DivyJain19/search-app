import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: { searchIsAvailable: false },
  reducers: {
    toggleShow(state) {
      state.searchIsAvailable = true;
    },
    toggleHide(state) {
      state.searchIsAvailable = false;
    },
  },
});

export default searchSlice;
export const searchActions = searchSlice.actions;
