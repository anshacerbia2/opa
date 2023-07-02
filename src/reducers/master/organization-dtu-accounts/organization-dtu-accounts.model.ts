export interface IOrganizationDtuAccountsState {
  step: number;
  steps: {
    linkTo: string | null;
    name: string;
  }[];
}
