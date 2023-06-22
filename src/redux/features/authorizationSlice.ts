import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { accountAPI } from "../authenticationAPI";

interface IAuthorizationState {
  account: any;
  error: any;
}

const initialState: IAuthorizationState = {
  account: null,
  error: null,
};

export const getAuthorization = createAsyncThunk(
  "authorization/account",
  async (id_token: string) => {
    try {
      if (!id_token) {
        throw { status: 404, message: "No id_token found" };
      }
      const response = await accountAPI(id_token);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAuthorization.fulfilled, (state, action) => {
        state.account = action.payload;
        state.error = null;
      })
      .addCase(getAuthorization.rejected, (state, action) => {
        state.account = null;
        state.error = action.error;
      });
  },
});

export default authorizationSlice.reducer;
