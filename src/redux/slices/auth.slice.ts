import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "../apis/auth/authApi";

interface IAuthState {
  idToken: string | null;
  account: any;
  error: any;
}

const initialState: IAuthState = {
  idToken: localStorage.getItem("id_token")?.trim() || null,
  account: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut: (state) => {
      localStorage.clear();
      sessionStorage.clear();
      state.account = null;
      state.idToken = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.authenticate.matchFulfilled,
      (state, action: PayloadAction<{ id_token: string }>) => {
        localStorage.setItem("id_token", action.payload.id_token);
        state.idToken = action.payload.id_token;
        state.error = null;
      }
    );
    builder.addMatcher(
      authApi.endpoints.authenticate.matchRejected,
      (state, action) => {
        state.error = action.payload?.data;
        /**
         * Error response :
         * error: {message: 'Rejected'}
         * meta: {baseQueryMeta: {…}, RTK_autoBatch: true, arg: {…}, requestId: 'b8RK9q5R7fOR4Y-v-5Ir2', rejectedWithValue: true, …}
         * payload:
         *  data:
         *    fieldErrors: [{…}]
         *    message: "error.validation"
         *    path: "/api/authenticate"
         *    status: 400
         *    title: "Method argument not valid"
         *    type: "http://www.opa.com/problem/contraint-violation"
         *  status: 400
         * type: "authenticationApi/executeMutation/rejected"
         */
      }
    );
    builder.addMatcher(
      authApi.endpoints.account.matchFulfilled,
      (state, action) => {
        state.account = action.payload;
        state.error = null;
      }
    );
    builder.addMatcher(
      authApi.endpoints.account.matchRejected,
      (state, action) => {
        state.error = action.payload?.data;
      }
    );
  },
});

export const { signOut } = authSlice.actions;
export default authSlice.reducer;

/**
 * Note: createAsyncThunk will be considered fulfilled if the function returns a value.
 * To get the error you have to use throw.
 */
// export const getAuthentication = createAsyncThunk(
//   "authentication/login",
//   async (credentials: ICredentials) => {
//     try {
//       const response = await authenticationAPI(credentials);
//       console.log(response, ">");

//       if (response.ok) {
//         return response.json();
//       } else {
//         throw {
//           status: response.status || null,
//           message: response.statusText || "Something went wrong!",
//         };
//       }
//     } catch (error) {
//       console.log("e:", error);

//       throw error;
//     }
//   }
// );
