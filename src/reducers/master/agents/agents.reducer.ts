import type { IAgentsState, IAgentsAction } from "../../../models/agents.model";

export const createInitialState = (): IAgentsState => {
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
        linkTo: "/master/agents",
        name: "Agents",
      },
    ],
  };
};

const agentsReducer = (
  state: IAgentsState = createInitialState(),
  action: IAgentsAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default agentsReducer;
