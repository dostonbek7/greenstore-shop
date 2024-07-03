import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "../basket/BasketSlice.js";

export const store = configureStore({
  reducer: {
    basket: basketSlice,
  },
});
