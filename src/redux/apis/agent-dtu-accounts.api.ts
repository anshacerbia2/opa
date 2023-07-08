import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import type {
  IAgentDtuAccountsResponse,
  IFilteredAgentDtuAccountsResponse,
} from "../../models/agent-dtu-accounts.model";

export const agentDtuAccountsApi = createApi({
  reducerPath: "agentDtuAccountsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/agent-dtu-accounts",
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
    filteredAgentDtuAccounts: builder.query<
      IFilteredAgentDtuAccountsResponse,
      string
    >({
      query: (searchParams) => `${searchParams}&sort=id,asc`,
      transformResponse: (data: IAgentDtuAccountsResponse[], meta) => {
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

export const { useFilteredAgentDtuAccountsQuery } = agentDtuAccountsApi;
