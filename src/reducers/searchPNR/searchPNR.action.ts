import type { ISearchPnrStates } from "./searchPNR.model";
import { INIT_GDS, INIT_OFFICEIDS, SET_OFFICEID } from "./searchPNR.constant";
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
      gds.type = "Amadeus/AIDL";
    } else if (account.agent.routingPayment == "GENERATE_LINK") {
      gds.isAgent = false;
      gds.isAgentTo = true;
      gds.type = "Amadeus/AIDL";
    } else if (account.agent.routingPayment == "MULTI_ROUTE") {
      gds.isAgent = false;
      gds.isAgentBSP = true;
      gds.type = "Amadeus/AIDL";
    } else if (account.agent.routingPayment == "DIRECT_TO_PLP") {
      gds.isAgent = false;
      gds.isAgentPLP = true;
      gds.type = "Amadeus/AIDL";
    } else if (account.agent.routingPayment == "DIRECT_TO_PLP_ASTINDO") {
      gds.isAgent = false;
      gds.isAgentPLPAstindo = true;
      gds.isAgentTo = true;
      gds.type = "Amadeus/AIDL";
    }
  }
  return {
    type: INIT_GDS,
    payload: gds,
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
