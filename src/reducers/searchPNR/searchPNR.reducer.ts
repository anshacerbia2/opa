import {
  INIT_GDS,
  INIT_OFFICEIDS,
  SET_GDS_TYPE,
  SET_OFFICEID,
} from "./searchPNR.constant";
import type { ISearchPnrStates } from "./searchPNR.model";

export interface Action {
  type: string;
  payload?: any;
}

export const createInitialState = () => {
  return {
    gds: {
      type: "",
      isAgentPLP: false,
      isAgentBPS: false,
      isAgentPLPAstindo: false,
      isAgent: false,
      isAgentTo: false,
    },
    gdsList: ["Amadeus/AIDL", "Sabre", "Galileo"],
    searchPNR: {
      pnr: "",
      officeId: "",
    },
    officeIds: [],
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
