export interface IPricingUmrohResponse {
  id: number;
  origin: string;
  destination: string;
  currency: string;
  amount: number;
  listAgent: string;
  // amountForPay: 0.0; Not found on DB
  // agentIdStr: null; Not found on DB
  // agentDtos: [
  //   {
  //     id: 1;
  //     name: "ATI Business Group";
  //     npwp: null;
  //     city: null;
  //     country: null;
  //     address: null;
  //     type: "";
  //     phone: null;
  //     emailDomain: "atibusinessgroup.com";
  //     isLog: null;
  //   },
  //   {
  //     id: 2;
  //     name: "Garuda Indonesia";
  //     npwp: null;
  //     city: null;
  //     country: null;
  //     address: null;
  //     type: "";
  //     phone: null;
  //     emailDomain: "garuda-indonesia.com";
  //     isLog: null;
  //   },
  //   {
  //     id: 17;
  //     name: "GERAI PANGKEPTONASA";
  //     npwp: "123";
  //     city: "Tangerang";
  //     country: "indonesia";
  //     address: "Tangerang";
  //     type: "Gerai";
  //     phone: "021123456";
  //     emailDomain: "ryan.poernama@atibusinessgroup.com";
  //     isLog: null;
  //   }
  // ]; No DB relation
  createdBy: string | null;
  createdDate: Date | null;
  lastModifiedBy: string | null;
  lastModifiedDate: Date | null;
  active: boolean;
}

export interface IFilteredPricingUmrohResponse {
  data: IPricingUmrohResponse[];
  dataLength: number | null;
}

export interface IPricingUmrohState {
  step: number;
  steps: {
    linkTo: string | null;
    name: string;
  }[];
}

export interface IPricingUmrohAction {
  type: string;
  payload?: any;
}
