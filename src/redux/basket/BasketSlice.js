import { combineReducers, createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  return (
    JSON.parse(localStorage.getItem("product")) || {
      allProduct: [],
      total: 0,
      price: 0,
    }
  );
};
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addData: (state, { payload }) => {
      const item = state.allProduct.find(
        (product) => product.id === payload.id
      );
      if (item) {
        item.amount += 1;
      } else {
        state.allProduct = [...state.allProduct, payload];
      }

      basketSlice.caseReducers.globalCount(state);
    },
    globalCount: (state) => {
      let allPrice = 0;
      let allSelected = 0;
      let productPrice = 0;
      let allTotal;

      state.allProduct.forEach((prod) => {
        productPrice += prod.amount * prod.price;
        allSelected += prod.amount;
      });
      state.total = allTotal;
      state.price = productPrice;
      localStorage.setItem("product", JSON.stringify(state));
    },
    increment: (state, { payload }) => {
      const item = state.allProduct.find((prod) => prod.id === payload.id);
      item.amount += 1;
    },
    decrement: (state, { payload }) => {
      const item = state.allProduct.find((prod) => prod.id === payload.id);
      item.amount -= 1;
    },
  },
});

export default basketSlice.reducer;
export const { addData, increment, decrement } = basketSlice.actions;
