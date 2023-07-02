import { IOrganizationAgreementState } from "./organization-agreement.model";

export interface Action {
  type: string;
  payload?: any;
}

export const createInitialState = (): IOrganizationAgreementState => {
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
        linkTo: "/master/organization-agreement",
        name: "Organization Agreement",
      },
    ],
  };
};

const organizationAgreementReducer = (
  state: IOrganizationAgreementState = createInitialState(),
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default organizationAgreementReducer;
