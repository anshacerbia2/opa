import type { ISearchPnrStates } from "./searchPNR.model";
import {
  INIT_GDS,
  SET_GDS_TYPE,
  INIT_OFFICEIDS,
  SET_OFFICEID,
  SET_PNR,
} from "./searchPNR.constant";
import GdsApis from "../../redux/apis/gds/gds.api";

export const initGDS = (account: any) => {
  const gds: ISearchPnrStates["gds"] = {
    type: "",
    isAgentPLP: false,
    isAgentBSP: false,
    isAgentPLPAstindo: false,
    isAgent: false,
    isAgentTo: false,
  };

  if (account.agent != undefined && account.agent != null) {
    if (account.agent.type == "Agent") {
      gds.isAgent = true;
      gds.type = "Galileo";
    } else if (account.agent.routingPayment == "DEFAULT") {
      gds.isAgent = false;
      gds.type = "AMADEUSAIDL";
    } else if (account.agent.routingPayment == "GENERATE_LINK") {
      gds.isAgent = false;
      gds.isAgentTo = true;
      gds.type = "AMADEUSAIDL";
    } else if (account.agent.routingPayment == "MULTI_ROUTE") {
      gds.isAgent = false;
      gds.isAgentBSP = true;
      gds.type = "AMADEUSAIDL";
    } else if (account.agent.routingPayment == "DIRECT_TO_PLP") {
      gds.isAgent = false;
      gds.isAgentPLP = true;
      gds.type = "AMADEUSAIDL";
    } else if (account.agent.routingPayment == "DIRECT_TO_PLP_ASTINDO") {
      gds.isAgent = false;
      gds.isAgentPLPAstindo = true;
      gds.isAgentTo = true;
      gds.type = "AMADEUSAIDL";
    }
  }
  return {
    type: INIT_GDS,
    payload: gds,
  };
};

export const setGDS = (value: string) => {
  return {
    type: SET_GDS_TYPE,
    payload: value,
  };
};

export const setPNR = (value: string) => {
  return {
    type: SET_PNR,
    payload: value,
  };
};

export const setOfficeId = (value: string) => {
  return {
    type: SET_OFFICEID,
    payload: value,
  };
};

export const initOfficeIds = (value: string[]) => {
  return {
    type: INIT_OFFICEIDS,
    payload: value,
  };
};
