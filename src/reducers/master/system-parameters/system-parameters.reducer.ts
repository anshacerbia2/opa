import type {
  ISystemParametersState,
  ISystemParametersAction,
} from "../../../models/system-parameters.model";

export const createInitialState = (): ISystemParametersState => {
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
        linkTo: "/master/system-parameters",
        name: "System Parameters",
      },
    ],
  };
};

const systemParametersReducer = (
  state: ISystemParametersState = createInitialState(),
  action: ISystemParametersAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default systemParametersReducer;
