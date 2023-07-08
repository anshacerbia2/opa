import type {
  IAgentDtuAccountsState,
  IAgentDtuAccountsAction,
} from "../../../models/agent-dtu-accounts.model";

export const createInitialState = (): IAgentDtuAccountsState => {
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
        linkTo: "/master/agent-dtu-accounts",
        name: "Agent DTU Accounts",
      },
    ],
  };
};

const agentDtuAccountsReducer = (
  state: IAgentDtuAccountsState = createInitialState(),
  action: IAgentDtuAccountsAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default agentDtuAccountsReducer;
