import type {
  IAgentCommissionAgreementsAction,
  IAgentCommissionAgreementsState,
} from "../../../models/agent-commission-agreements.model";

export interface Action {
  type: string;
  payload?: any;
}

export const createInitialState = (): IAgentCommissionAgreementsState => {
  return {
    step: 2,
    steps: [
      {
        linkTo: "/",
        name: "Dashboard",
      },
      {
        linkTo: "/master",
        name: "Master",
      },
      {
        linkTo: "/master/agent-commission-agreements",
        name: "Agent Commission Agreements",
      },
    ],
  };
};

const agentCommissionAgreementsReducer = (
  state: IAgentCommissionAgreementsState = createInitialState(),
  action: IAgentCommissionAgreementsAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default agentCommissionAgreementsReducer;
