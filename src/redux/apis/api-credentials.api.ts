import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import type {
  IApiCredentialsResponse,
  IFilteredApiCredentialsResponse,
} from "../../models/api-credentials.model";

export const apiCredentialsApi = createApi({
  reducerPath: "apiCredentialsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/api-credentials",
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
    filteredApiCredentials: builder.query<
      IFilteredApiCredentialsResponse,
      string
    >({
      query: (searchParams) => `${searchParams}&sort=id,asc`,
      transformResponse: (data: IApiCredentialsResponse[], meta) => {
        const dataLength = Number(
          meta?.response?.headers?.get("X-Total-Count")
        );
        return {
          data,
          dataLength,
        };
      },
    }),
  }),
});

export const { useFilteredApiCredentialsQuery } = apiCredentialsApi;
