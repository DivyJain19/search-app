import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search-slice";
import productSlice from "./products-slice";
const store = configureStore({
  reducer: { search: searchSlice.reducer, product: productSlice.reducer },
});

export default store;
