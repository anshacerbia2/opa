export interface IBankIdentificationNumbersResponse {
  id: number;
  bank_name: string;
  card_type: string | null;
  country: string | null;
  grouping: string | null;
  bin_number: string;
}

export interface IFilteredBankIdentificationNumbersResponse {
  data: IBankIdentificationNumbersResponse[];
  dataLength: number | null;
}

export interface IBankIdentificationNumbersState {
  step: number;
  steps: {
    linkTo: string | null;
    name: string;
  }[];
}

export interface IBankIdentificationNumbersAction {
  type: string;
  payload?: any;
}
