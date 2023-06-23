import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IGlobalState {
  isLoading: boolean;
}

const initialState: IGlobalState = {
  isLoading: false,
};

export const globalSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    loading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { loading } = globalSlice.actions;
export default globalSlice.reducer;
