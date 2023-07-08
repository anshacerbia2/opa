import type {
  IPricingUmrohState,
  IPricingUmrohAction,
} from "../../../models/pricing-umroh.model";

export const createInitialState = (): IPricingUmrohState => {
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
        linkTo: "/master/pricing-umroh-hb",
        name: "Pricing Umroh HB",
      },
    ],
  };
};

const pricingUmrohReducer = (
  state: IPricingUmrohState = createInitialState(),
  action: IPricingUmrohAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default pricingUmrohReducer;
