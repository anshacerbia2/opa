import {
  INIT_GDS,
  INIT_OFFICEIDS,
  SET_GDS_TYPE,
  SET_OFFICEID,
  SET_PNR,
} from "./searchPNR.constant";
import type { ISearchPnrStates } from "./searchPNR.model";

export interface Action {
  type: string;
  payload?: any;
}

export const createInitialState = (): ISearchPnrStates => {
  return {
    step: 1,
    steps: [
      {
        linkTo: "/",
        name: "Dashboard",
      },
      {
        linkTo: "/search-pnr",
        name: "Search PNR",
      },
      {
        linkTo: null,
        name: "Result",
      },
      {
        linkTo: null,
        name: "Payment",
      },
    ],
    gds: {
      type: "",
      isAgentPLP: false,
      isAgentBSP: false,
      isAgentPLPAstindo: false,
      isAgent: false,
      isAgentTo: false,
    },
    gdsList: [
      { name: "Amadeus/AIDL", value: "AMADEUSAIDL" },
      { name: "Sabre", value: "Sabre" },
      { name: "Galileo", value: "Galileo" },
    ],
    searchPNR: {
      pnr: "",
      officeId: "",
    },
    officeIds: [],
    isLoading: false,
    //  isGenerateLinkBSP = true;
    //       isPaymentBSP = true;

    //       responseError = false;
    //       itineraries = null;

    //       method = "doku";
    //       paymentRequests = [];
    //       paymentRequest = {};
    //       allowedPaymentMethods = [];

    //       paymentRequest.mandiriCardNumber = "";
    //       paymentRequest.bypass = false;
    //       paymentRequest.serviceFee = "0";

    //       modalData = {};
    //       transactionId = null;

    //       step = "search";
    //       isSearching = false;
    //       isPaying = false;
    //       group = false;

    //       isRepricing = false;

    //       showDetails = false;

    //       pricingRequired = false;
    //       acknowledgePricing = false;
    //       doNotSendTourbillonMail = false;

    //       gdsPay = "AMADEUSAIDL";
  };
};

const searchPnrReducer = (
  state: ISearchPnrStates = createInitialState(),
  action: Action
) => {
  switch (action.type) {
    case INIT_GDS:
      return {
        ...state,
        gds: action.payload,
      };
    case SET_GDS_TYPE:
      return {
        ...state,
        gds: { ...state.gds, type: action.payload },
      };
    case SET_PNR:
      return {
        ...state,
        searchPNR: { ...state.searchPNR, pnr: action.payload },
      };
    case INIT_OFFICEIDS:
      return {
        ...state,
        officeIds: action.payload,
      };
    case SET_OFFICEID:
      return {
        ...state,
        searchPNR: { ...state.searchPNR, officeId: action.payload },
      };
    default:
      return state;
  }
};

export default searchPnrReducer;
