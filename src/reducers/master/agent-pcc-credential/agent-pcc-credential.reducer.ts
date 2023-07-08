import type {
  IAgentPccCredentialsState,
  IAgentPccCredentialsAction,
} from "../../../models/agent-pcc-credentials.model";

export const createInitialState = (): IAgentPccCredentialsState => {
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
        linkTo: "/master/agent-pcc-credentials",
        name: "Agent Credentials (1G / 1S)",
      },
    ],
  };
};

const agentPccCredentialsReducer = (
  state: IAgentPccCredentialsState = createInitialState(),
  action: IAgentPccCredentialsAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default agentPccCredentialsReducer;
