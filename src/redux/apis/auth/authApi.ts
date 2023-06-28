import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../store";

type ICredentials = {
  username: string;
  password: string;
};

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/",
    prepareHeaders: (headers, { getState }) => {
      const { idToken } = (getState() as RootState).auth;
      if (idToken) {
        headers.set("Authorization", `Bearer ${idToken}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    authenticate: builder.mutation<any, ICredentials>({
      query: (credentials) => ({
        url: "authenticate",
        method: "POST",
        body: credentials,
      }),
    }),
    account: builder.query<any, undefined>({
      query: () => "account",
    }),
  }),
});

export const { useAuthenticateMutation, useAccountQuery } = authApi;
