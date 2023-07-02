export interface IOrganizationAgreementState {
  step: number;
  steps: {
    linkTo: string | null;
    name: string;
  }[];
}
