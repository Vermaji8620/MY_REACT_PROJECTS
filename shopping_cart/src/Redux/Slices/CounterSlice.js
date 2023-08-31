//  yaha pe slice bana rahe hai

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 110,
};

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { decrement, increment } = CounterSlice.actions;
export default CounterSlice.reducer;
