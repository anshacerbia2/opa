import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { authenticateAPI, ICredentials } from "../authenticationAPI";

interface IAuthenticationState {
  isAuthenticated: boolean;
  error: any;
}

const initialState: IAuthenticationState = {
  isAuthenticated: false,
  error: null,
};

export const getAuthentication = createAsyncThunk(
  "authentication/login",
  async (credentials: ICredentials) => {
    const response = await authenticateAPI(credentials);
    return response;
  }
);
// export const login = createAsyncThunk(
//   "authentication/login",
//   async (credentials: ICredentials, { dispatch }) => {
//         const response = await authenticate(credentials);
//       console.log(response);

//       dispatch(loginSuccess(response));
//     } catch (error) {
//       dispatch(loginFailure(error));
//     }
//   }
// );

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    // loginSuccess: (state, action: PayloadAction<User>) => {
    //   state.isAuthenticated = true;
    //   state.error = null;
    //   sessionStorage.setItem("id_token", action.payload.id_token);
    // },
    // loginFailure: (state, action: PayloadAction<any>) => {
    //   state.isAuthenticated = false;
    //   state.error = action.payload;
    // },
    // logout: (state) => {
    //   state.isAuthenticated = false;
    //   state.error = null;
    //   sessionStorage.removeItem("id_token");
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(getAuthentication.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.error = null;
        localStorage.setItem("id_token", action.payload.id_token);
      })
      .addCase(getAuthentication.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

// export const { loginSuccess, loginFailure, logout } =
//   authenticationSlice.actions;
export default authenticationSlice.reducer;
