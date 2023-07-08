import type {
  IFlightDurationDepositsState,
  IFlightDurationDepositsAction,
} from "../../../models/flight-duration-deposits.model";

export const createInitialState = (): IFlightDurationDepositsState => {
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
        linkTo: "/master/flight-duration-deposits",
        name: "Flight Duration Deposit",
      },
    ],
  };
};

const flightDurationDepositsReducer = (
  state: IFlightDurationDepositsState = createInitialState(),
  action: IFlightDurationDepositsAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default flightDurationDepositsReducer;
