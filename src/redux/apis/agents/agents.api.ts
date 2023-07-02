import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../store";

export interface IAgentResponse {
  id: number;
  type: string;
  name: string;
  country: string;
  city: string;
  address: string;
  emailDomain: string;
  phone: string;
  npwp: string;
}

export const agentsApi = createApi({
  reducerPath: "agentsApi",
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
    filteredAgents: builder.query<any, string>({
      query: (searchParams) => `${searchParams}&sort=id,asc`,
      transformResponse: (data: any, meta, arg) => {
        const dataLength = meta?.response?.headers?.get("X-Total-Count");
        return {
          data,
          dataLength: 159, // Harcoded for now due to server headers not exposed
        };
      },
    }),
  }),
});

export const { useFilteredAgentsQuery } = agentsApi;
