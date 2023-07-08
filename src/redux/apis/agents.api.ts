import {
  SkipToken,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import type {
  IAgentsResponse,
  IFilteredAgentsResponse,
} from "../../models/agents.model";

export const agentsApi = createApi({
  reducerPath: "agentsApi",
  tagTypes: ["Agents"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/agents",
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
    getFilteredAgents: builder.query<IFilteredAgentsResponse, string>({
      query: (searchParams) => `${searchParams}&sort=id,asc`,
      providesTags: ["Agents"],
      transformResponse: (data: IAgentsResponse[], meta) => {
        const dataLength = Number(
          meta?.response?.headers?.get("X-Total-Count")
        );
        return {
          data,
          dataLength,
        };
      },
    }),
    getAgent: builder.query<IAgentsResponse, number | SkipToken>({
      query: (id) => `${String(id)}`,
    }),
  }),
});

export const { useGetFilteredAgentsQuery, useGetAgentQuery } = agentsApi;
