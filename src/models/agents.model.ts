// Api
export interface IAgentsResponse {
  id: number;
  type: string | null;
  name: string;
  country: string | null;
  city: string | null;
  address: string | null;
  emailDomain: string;
  phone: string | null;
  npwp: string | null;
  specialOpenUserId: number | null;
  routingPayment: string; // Default string on DB
  createdBy: string | null;
  updatedBy: string | null;
  createdDateTime: Date; // Default Date on DB
  updatedDateTime: Date; // Default Date on DB
  isLog: boolean;
}

export interface IFilteredAgentsResponse {
  data: IAgentsResponse[];
  dataLength: number | null;
}

// Reducer
export interface IAgentsState {
  step: number;
  steps: {
    linkTo: string | null;
    name: string;
  }[];
}

// Action Reducer
export interface IAgentsAction {
  type: string;
  payload?: any;
}
