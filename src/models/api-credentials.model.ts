import type { IAgentsResponse } from "./agents.model";

export interface IApiCredentialsResponse {
  id: number;
  username: string;
  password: string;
  key: string;
  createDateTime: Date | null;
  createdBy: string | null;
  agent: IAgentsResponse;
}

export interface IFilteredApiCredentialsResponse {
  data: IApiCredentialsResponse[];
  dataLength: number | null;
}

export interface IApiCredentialsState {
  step: number;
  steps: {
    linkTo: string | null;
    name: string;
  }[];
}

export interface IApiCredentialsAction {
  type: string;
  payload?: any;
}
