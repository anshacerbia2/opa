export interface ISearchPnrStates {
  step: number;
  steps: {
    linkTo: string | null;
    name: string;
  }[];
  // isSearching: false;
  // isPaying: false;
  // isRepricing: false;
  gds: {
    type: string;
    isAgentPLP: boolean;
    isAgentBSP: boolean;
    isAgentPLPAstindo: boolean;
    isAgent: boolean;
    isAgentTo: boolean;
  };
  gdsList: { name: string; value: string }[];
  searchPNR: {
    pnr: string;
    officeId: string;
  };
  officeIds: string[];
  isLoading: boolean;
  retrievedPNR?: {
    status: string;
    itineraries: {}[];
    currency: string;
    paymentMethods: string[];
    group: boolean;
    konsorsium: boolean;
    deposit: boolean;
    deposit2: boolean;
    total: string;
    newTotal: string;
    totalCommission: string;
    totalDeposit: string;
    totalOldDeposit: string;
    totalDepositPerPax: string;
    blockTransactionAmountPerPax: string;
    blockTransactionAmountPerPax2: string;
    totalPax: string;
    totalPph: string;
    totalPriceAgent: string;
    newTotalPriceAgent: string;
    updateDeposit: boolean;
  };
  // isPaymentBSP: boolean;
  // isGenerateLinkBSP: boolean;

  // responseError: boolean;
  // itineraries: null;

  // method: "doku";
  // paymentRequests: [];
  // paymentRequest: {};
  // allowedPaymentMethods: [];

  // // paymentRequest.mandiriCardNumber : "";
  // // paymentRequest.bypass : false;
  // // paymentRequest.serviceFee : "0";

  // modalData: {};
  // transactionId: null;

  // group: false;

  // showDetails: false;

  // pricingRequired: false;
  // acknowledgePricing: false;
  // doNotSendTourbillonMail: false;

  // gdsPay: "AMADEUSAIDL";
}
