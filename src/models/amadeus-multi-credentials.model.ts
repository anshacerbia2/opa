import type { IAgentsResponse } from "./agents.model";

export interface IAmadeusMultiCredentialsResponse {
  id: number;
  officeId: string;
  description: string | null;
  allowReissued: boolean;
  allowReissuedAtc: boolean;
  agent: IAgentsResponse | null;
}

export interface IFilteredAmadeusMultiCredentialsResponse {
  data: IAmadeusMultiCredentialsResponse[];
  dataLength: number | null;
}

export interface IAmadeusMultiCredentialsState {
  step: number;
  steps: {
    linkTo: string | null;
    name: string;
  }[];
}

export interface IAmadeusMultiCredentialsAction {
  type: string;
  payload?: any;
}
