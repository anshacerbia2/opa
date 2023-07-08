export interface IFlightDurationDepositsResponse {
  id: number;
  type: string | null;
  minDuration: number | null;
  maxDuration: number | null;
  amountPerPax: number | null;
}

export interface IFilteredFlightDurationDepositsResponse {
  data: IFlightDurationDepositsResponse[];
  dataLength: number | null;
}

export interface IFlightDurationDepositsState {
  step: number;
  steps: {
    linkTo: string | null;
    name: string;
  }[];
}

export interface IFlightDurationDepositsAction {
  type: string;
  payload?: any;
}
