import type {
  IBankIdentificationNumbersState,
  IBankIdentificationNumbersAction,
} from "../../../models/bank-identification-numbers.model";

export const createInitialState = (): IBankIdentificationNumbersState => {
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
        linkTo: "/master/bank-identification-numbers",
        name: "BIN Setting",
      },
    ],
  };
};

const bankIdentificationNumbersReducer = (
  state: IBankIdentificationNumbersState = createInitialState(),
  action: IBankIdentificationNumbersAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default bankIdentificationNumbersReducer;
