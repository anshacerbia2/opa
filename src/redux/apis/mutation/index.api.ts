import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../store";
import type { IAgentsResponse } from "../../../models/agents.model";
import { agentsApi } from "../agents.api";

export const mutationApiSlice: {
  [key: string]: any;
} = createApi({
  reducerPath: "mutationApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/",
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
    createAgent: builder.mutation<IAgentsResponse, IAgentsResponse>({
      query: (agent) => ({
        url: "agents",
        method: "POST",
        body: agent,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          if (result?.meta?.response?.ok === true) {
            dispatch(agentsApi.util.invalidateTags(["Agents"]));
          }
        } catch (error) {
          console.log(
            "Create agent failed, revalidation for getFlteredAgents are canceled"
          );
        }
      },
    }),
    updateAgent: builder.mutation<IAgentsResponse, IAgentsResponse>({
      query: (agent) => ({
        url: "agents",
        method: "PUT",
        body: agent,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        if (result?.meta?.response?.ok === true) {
          dispatch(agentsApi.util.invalidateTags(["Agents"]));
        }
      },
    }),
  }),
});

export const { useUpdateAgentMutation } = mutationApiSlice;
