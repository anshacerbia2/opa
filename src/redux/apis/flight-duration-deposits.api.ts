import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import type {
  IFlightDurationDepositsResponse,
  IFilteredFlightDurationDepositsResponse,
} from "../../models/flight-duration-deposits.model";

export const flightDurationDepositsApi = createApi({
  reducerPath: "flightDurationDepositsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/flight-duration-deposits",
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
    filteredFlightDurationDeposits: builder.query<
      IFilteredFlightDurationDepositsResponse,
      string
    >({
      query: (searchParams) => `${searchParams}&sort=id,asc`,
      transformResponse: (data: IFlightDurationDepositsResponse[], meta) => {
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

export const { useFilteredFlightDurationDepositsQuery } =
  flightDurationDepositsApi;
