import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { agentsApi } from "../apis/agents.api";

export interface IGlobalState {
  [key: string]: any;
  isLoading: boolean;
  agents: any;
  agent: any;
  error: any;
  modal: any | null;
}

const initialState: IGlobalState = {
  isLoading: false,
  agents: null,
  agent: null,
  error: null,
  modal: null,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    loading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    showModal: (state, action: PayloadAction<any>) => {
      state.modal = action.payload;
    },
    closeModal: (state) => {
      state.modal = state.modalForm = null;
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      agentsApi.endpoints.getAgent.matchFulfilled,
      (state, action) => {
        state.agent = action.payload;
        state.error = null;
      }
    );
    builder.addMatcher(
      agentsApi.endpoints.getAgent.matchRejected,
      (state, action) => {
        state.agent = null;
        state.error = action.payload?.data;
      }
    );
  },
});

export const { showModal, closeModal } = globalSlice.actions;
export default globalSlice.reducer;
