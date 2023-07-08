import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import type {
  ISystemParametersResponse,
  IFilteredSystemParametersResponse,
} from "../../models/system-parameters.model";

export const systemParametersApi = createApi({
  reducerPath: "systemParametersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/system-parameters",
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
    filteredSystemParameters: builder.query<
      IFilteredSystemParametersResponse,
      string
    >({
      /**
       * Use http://localhost:8080/api/system-parameters/paging instead of
       * http://localhost:8080/api/system-parameters, because searchParams not works on it
       */
      query: (searchParams) => `/paging${searchParams}&sort=id,asc`,
      transformResponse: (data: ISystemParametersResponse[], meta) => {
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

export const { useFilteredSystemParametersQuery } = systemParametersApi;
