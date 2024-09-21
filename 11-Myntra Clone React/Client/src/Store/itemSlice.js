import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addItems: (state, action) => {
      return action.payload;
    },
  },
});

export default itemSlice.reducer;

export const { addItems } = itemSlice.actions;
