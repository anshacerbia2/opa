import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import type {
  IAgentPccCredentialsResponse,
  IFilteredAgentPccCredentialsResponse,
} from "../../models/agent-pcc-credentials.model";

export const agentPccCredentialsApi = createApi({
  reducerPath: "agentPccCredentialsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/agent-pcc-credentials",
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
    filteredAgentPccCredentials: builder.query<
      IFilteredAgentPccCredentialsResponse,
      string
    >({
      query: (searchParams) => `${searchParams}&sort=id,asc`,
      transformResponse: (data: IAgentPccCredentialsResponse[], meta) => {
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

export const { useFilteredAgentPccCredentialsQuery } = agentPccCredentialsApi;
