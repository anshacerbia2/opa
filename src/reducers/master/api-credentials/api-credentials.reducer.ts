import type {
  IApiCredentialsState,
  IApiCredentialsAction,
} from "../../../models/api-credentials.model";

export const createInitialState = (): IApiCredentialsState => {
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
        linkTo: "/master/api-credentials",
        name: "Api Credentials",
      },
    ],
  };
};

const apiCredentialsReducer = (
  state: IApiCredentialsState = createInitialState(),
  action: IApiCredentialsAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default apiCredentialsReducer;
