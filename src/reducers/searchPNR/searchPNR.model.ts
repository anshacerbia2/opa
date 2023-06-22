export interface ISearchPnrStates {
  gds: {
    type?: string;
    isAgentPLP?: boolean;
    isAgentBSP?: boolean;
    isAgentPLPAstindo?: boolean;
    isAgent?: boolean;
    isAgentTo?: boolean;
  };
  searchPNR: {
    pnr: string;
    officeId: string;
  };
  officeIds: {}[];
}
