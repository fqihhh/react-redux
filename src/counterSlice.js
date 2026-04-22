import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    tambahBarang: (state, action) => {
      state.items.push(action.payload);
    },
    hapusBarang: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    bersihkanSemua: (state) => {
      state.items = [];
    },
  },
});

export const { tambahBarang, hapusBarang, bersihkanSemua } =
  inventorySlice.actions;

export default inventorySlice.reducer;