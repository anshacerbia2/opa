export interface IRetrievePNR {
  blockTransactionAmountPerPax: string;
  blockTransactionAmountPerPax2: string;
  currency: string;
  deposit: boolean;
  deposit2: boolean;
  group: boolean;
  itineraries: {}[];
  konsorsium: boolean;
  newTotal: string;
  newTotalPriceAgent: string;
  paymentMethods: string[];
  status: string;
  total: string;
  totalCommission: string;
  totalDeposit: string;
  totalDepositPerPax: string;
  totalOldDeposit: string;
  totalPax: string;
  totalPph: string;
  totalPriceAgent: string;
  updateDeposit: boolean;
}
