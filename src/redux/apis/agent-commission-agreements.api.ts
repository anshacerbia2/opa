import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import type {
  IAgentCommissionAgreementsResponse,
  IFilteredAgentCommissionAgreementsResponse,
} from "../../models/agent-commission-agreements.model";

export const agentCommisionAgreementsApi = createApi({
  reducerPath: "agentsCommissionAgreementsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/agent-commission-agreements",
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
    filteredAgentCommissionAgreements: builder.query<
      IFilteredAgentCommissionAgreementsResponse,
      string
    >({
      query: (searchParams) => `${searchParams}&sort=id,asc`,
      transformResponse: (data: IAgentCommissionAgreementsResponse[], meta) => {
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

export const { useFilteredAgentCommissionAgreementsQuery } =
  agentCommisionAgreementsApi;
