import type { IAmadeusMultiCredentialsResponse } from "./amadeus-multi-credentials.model";
import type { IAgentPccCredentialsResponse } from "./agent-pcc-credentials.model";

export interface IAgentCommissionAgreementsResponse {
  id: number;
  unitOwner: string | null;
  iataNo: string | null;
  agreementNo: string;
  mslDom: string | null;
  mslIntl: string | null;
  start: Date;
  end: Date;
  domCommission: number;
  intlCommission: number;
  gds: string | null;
  agentPccCredential: IAgentPccCredentialsResponse | null;
  amadeusMultiCredential: IAmadeusMultiCredentialsResponse | null;
}
export interface IFilteredAgentCommissionAgreementsResponse {
  data: IAgentCommissionAgreementsResponse[];
  dataLength: number | null;
}

export interface IAgentCommissionAgreementsState {
  step: number;
  steps: {
    linkTo: string | null;
    name: string;
  }[];
}

export interface IAgentCommissionAgreementsAction {
  type: string;
  payload?: any;
}
