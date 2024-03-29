import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    categories: [],
  },
  reducers: {
    addData(state, action) {
      state.items = action.payload.items;
      //   console.log(action.payload.items);
    },
    addCategories(state, action) {
      state.categories = action.payload.categories;
    },
  },
});

export default productsSlice;
export const productsActions = productsSlice.actions;
