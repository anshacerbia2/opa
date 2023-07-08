import type { IAgentsResponse } from "./agents.model";

// Api
export interface IAgentPccCredentialsResponse {
  id: number;
  pcc: string | null;
  gds: string | null;
  ticketPrinterId: string | null;
  hardcopyPrinterId: string | null;
  invoiceItineraryPrinterId: string | null;
  username: string | null;
  password: string | null;
  branchId: string | null;
  agent: IAgentsResponse | null;
}

export interface IFilteredAgentPccCredentialsResponse {
  data: IAgentPccCredentialsResponse[];
  dataLength: number | null;
}

// Reducer
export interface IAgentPccCredentialsState {
  step: number;
  steps: {
    linkTo: string | null;
    name: string;
  }[];
}

// Action Reducer
export interface IAgentPccCredentialsAction {
  type: string;
  payload?: any;
}
