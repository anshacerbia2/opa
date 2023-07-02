import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../store";

// export interface IAgentResponse {
//   id: 4;
//   unitOwner: "JKT";
//   iataNo: "12345678";
//   agreementNo: "DWIDAYA TESTING COMMISSION";
//   mslDom: null;
//   mslIntl: null;
//   start: "2018-10-31";
//   end: "2018-11-30";
//   domCommission: 5;
//   intlCommission: 7;
//   gds: "Sabre";
//   agentPccCredential: {
//     id: 4;
//     pcc: "W028";
//     gds: "SABRE";
//     ticketPrinterId: "1E2661";
//     hardcopyPrinterId: "1E2661";
//     invoiceItineraryPrinterId: "1E2661";
//     username: "8910";
//     password: "garuda1";
//     branchId: null;
//     agent: {
//       id: 6;
//       name: "Dwidaya";
//       npwp: null;
//       city: null;
//       country: null;
//       address: null;
//       type: "Gerai";
//       phone: null;
//       emailDomain: "dwidaya.com";
//       specialOpenUserId: null;
//       routingPayment: "DEFAULT";
//       createdBy: null;
//       createdDateTime: "2019-10-01T06:10:10Z";
//       updatedBy: null;
//       updatedDateTime: "2019-10-01T06:10:10Z";
//       isLog: false;
//     };
//   };
//   amadeusMultiCredential: null;
// }

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
    filteredAgentCommissionAgreements: builder.query<any, string>({
      query: (searchParams) => `${searchParams}&sort=id,asc`,
      transformResponse: (data: any, meta, arg) => {
        const dataLength = meta?.response?.headers?.get("X-Total-Count");
        return {
          data,
          dataLength: 5, // Harcoded for now due to server headers not exposed
        };
      },
    }),
  }),
});

export const { useFilteredAgentCommissionAgreementsQuery } =
  agentCommisionAgreementsApi;
