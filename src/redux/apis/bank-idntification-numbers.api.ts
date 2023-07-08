import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import type {
  IBankIdentificationNumbersResponse,
  IFilteredBankIdentificationNumbersResponse,
} from "../../models/bank-identification-numbers.model";

export const bankIdentificationNumbersApi = createApi({
  reducerPath: "bankIdentificationNumbersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/bank-identification-numbers",
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
    filteredBankIdentificationNumbers: builder.query<
      IFilteredBankIdentificationNumbersResponse,
      string
    >({
      query: (searchParams) => `${searchParams}&sort=id,asc`,
      transformResponse: (data: IBankIdentificationNumbersResponse[], meta) => {
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

export const { useFilteredBankIdentificationNumbersQuery } =
  bankIdentificationNumbersApi;
