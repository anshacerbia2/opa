import type {
  IAmadeusMultiCredentialsState,
  IAmadeusMultiCredentialsAction,
} from "../../../models/amadeus-multi-credentials.model";

export const createInitialState = (): IAmadeusMultiCredentialsState => {
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
        linkTo: "/master/amadeus-multi-credentials",
        name: "Agent Credentials (1A)",
      },
    ],
  };
};

const amadeusMultiCredentialReducer = (
  state: IAmadeusMultiCredentialsState = createInitialState(),
  action: IAmadeusMultiCredentialsAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default amadeusMultiCredentialReducer;
