export interface IOrganizationState {
  step: number;
  steps: {
    linkTo: string | null;
    name: string;
  }[];
}
