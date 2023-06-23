export interface ISearchPnrStates {
  step: number;
  gds: {
    type: string;
    isAgentPLP: boolean;
    isAgentBSP: boolean;
    isAgentPLPAstindo: boolean;
    isAgent: boolean;
    isAgentTo: boolean;
  };
  gdsList: string[];
  searchPNR: {
    pnr: string;
    officeId: string;
  };
  officeIds: string[];
}
