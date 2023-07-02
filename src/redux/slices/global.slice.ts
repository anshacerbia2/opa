import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { agentsApi } from "../apis/agents/agents.api";

export interface IGlobalState {
  isLoading: boolean;
  agents: any;
  agentCommissionAgreements: any;
  error: any;
}

const initialState: IGlobalState = {
  isLoading: false,
  agents: null,
  agentCommissionAgreements: null,
  error: null,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    loading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      agentsApi.endpoints.filteredAgents.matchFulfilled,
      (state, action) => {
        state.agents = action.payload.data;
        state.error = null;
      }
    );
    builder.addMatcher(
      agentsApi.endpoints.filteredAgents.matchRejected,
      (state, action) => {
        state.agents = null;
        state.error = action.payload?.data;
      }
    );
  },
});

export default globalSlice.reducer;
