import {
  INIT_GDS,
  INIT_OFFICEIDS,
  SET_GDS_TYPE,
  SET_OFFICEID,
  SET_PNR,
} from "./organization.constant";
import type { IOrganizationState } from "./organization.model";

export interface Action {
  type: string;
  payload?: any;
}

export const createInitialState = (): IOrganizationState => {
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
        linkTo: "/master/organization",
        name: "Organization",
      },
    ],
  };
};

const organizationReducer = (
  state: IOrganizationState = createInitialState(),
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default organizationReducer;
