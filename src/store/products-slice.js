import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
  },
  reducers: {
    addData(state, action) {
      state.items = action.payload.items;
      //   console.log(action.payload.items);
    },
  },
});

export default productSlice;
export const productActions = productSlice.actions;
