export interface ISystemParametersResponse {
  id: number;
  parameterName: string | null;
  parameterValue: string | null;
}

export interface IFilteredSystemParametersResponse {
  data: ISystemParametersResponse[];
  dataLength: number | null;
}

export interface ISystemParametersState {
  step: number;
  steps: {
    linkTo: string | null;
    name: string;
  }[];
}

export interface ISystemParametersAction {
  type: string;
  payload?: any;
}
