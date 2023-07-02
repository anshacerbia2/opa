import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../store";

/**
 * GET Response:
 * {
			"id": 1,
			"agent": {
				"id": 3,
				"name": "Anta Vaya",
				"npwp": null,
				"city": null,
				"country": null,
				"address": null,
				"type": "",
				"phone": null,
				"emailDomain": "antavaya.com",
				"specialOpenUserId": null,
				"routingPayment": "DEFAULT",
				"createdBy": null,
				"createdDateTime": "2019-10-01T06:10:10Z",
				"updatedBy": null,
				"updatedDateTime": "2019-10-01T06:10:10Z",
				"isLog": false
			},
			"tourCode": "SA3NANX",
			"gosCode": null,
			"gosName": null,
			"gosPic": null,
			"gosAddress": null,
			"gosPhone": null,
			"gosFax": null,
			"gosEmail": null,
			"gosCurrency": null,
			"gosBold": null,
			"gosExpDate": null,
			"gosMobilePhone": null,
			"gosNpwp": null,
			"statusActive": "ACTIVE",
			"request": null,
			"response": null,
			"manual": false,
			"customerType": null
    },
 */

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
    filteredAgentDtuAccounts: builder.query<any, string>({
      query: (searchParams) => `${searchParams}&sort=id,asc`,
      transformResponse: (data: any, meta, arg) => {
        const dataLength = meta?.response?.headers?.get("X-Total-Count");
        console.log("dtu", dataLength);
        return {
          data,
          dataLength: 38, // Harcoded for now due to server headers not exposed
        };
      },
    }),
  }),
});

export const { useFilteredAgentDtuAccountsQuery } = agentDtuAccountsApi;
