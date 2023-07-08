import type { IAgentsResponse } from "./agents.model";

// Api
export interface IAgentDtuAccountsResponse {
  id: number;
  tourCode: string | null;
  gosCode: string | null;
  gosName: string | null;
  gosPic: string | null;
  gosAddress: string | null;
  gosPhone: string | null;
  gosFax: string | null;
  gosEmail: string | null;
  gosCurrency: string | null;
  gosBold: string | null;
  gosExpDate: Date | null;
  gosMobilePhone: string | null;
  gosNpwp: string | null;
  statusActive: string | null;
  request: string | null;
  response: string | null;
  manual: boolean;
  customerType: string | null;
  agent: IAgentsResponse;
}

export interface IFilteredAgentDtuAccountsResponse {
  data: IAgentDtuAccountsResponse[];
  dataLength: number | null;
}

// Reducer
export interface IAgentDtuAccountsState {
  step: number;
  steps: {
    linkTo: string | null;
    name: string;
  }[];
}

// Action Reducer
export interface IAgentDtuAccountsAction {
  type: string;
  payload?: any;
}
