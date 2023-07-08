import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import type {
  IFilteredPricingUmrohResponse,
  IPricingUmrohResponse,
} from "../../models/pricing-umroh.model";

export const pricingUmrohApi = createApi({
  reducerPath: "pricingUmrohApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/mumroh/hb/",
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
    filteredPricingUmroh: builder.query<IFilteredPricingUmrohResponse, string>({
      /**
       * Use http://localhost:8080/api/mumroh/hb instead of
       * http://localhost:8080/api/mumroh/hb/paging, because be not returning response,
       * alos use "/" on the last query string (/api/mumroh/hb/ not /api/mumroh/hb),
       * otherwise it will return 404
       */
      query: (searchParams) => `${searchParams}&sort=id,asc`,
      transformResponse: (data: IPricingUmrohResponse[], meta) => {
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

export const { useFilteredPricingUmrohQuery } = pricingUmrohApi;
