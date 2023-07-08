import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import type {
  IAmadeusMultiCredentialsResponse,
  IFilteredAmadeusMultiCredentialsResponse,
} from "../../models/amadeus-multi-credentials.model";

export const amadeusMultiCredentialsApi = createApi({
  reducerPath: "amadeusMultiCredentialsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/amadeus-multi-credentials",
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
    filteredAmadeusMultiCredentials: builder.query<
      IFilteredAmadeusMultiCredentialsResponse,
      string
    >({
      query: (searchParams) => `${searchParams}&sort=id,asc`,
      transformResponse: (data: IAmadeusMultiCredentialsResponse[], meta) => {
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

export const { useFilteredAmadeusMultiCredentialsQuery } =
  amadeusMultiCredentialsApi;
