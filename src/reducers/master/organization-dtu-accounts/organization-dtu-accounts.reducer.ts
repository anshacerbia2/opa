import { IOrganizationDtuAccountsState } from "./organization-dtu-accounts.model";

export interface Action {
  type: string;
  payload?: any;
}

export const createInitialState = (): IOrganizationDtuAccountsState => {
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
        linkTo: "/master/organization-dtu-account",
        name: "Organization DTU Accounts",
      },
    ],
  };
};

const organizationDtuAccountsReducer = (
  state: IOrganizationDtuAccountsState = createInitialState(),
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default organizationDtuAccountsReducer;
