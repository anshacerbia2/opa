import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { ThunkAction, Action } from "@reduxjs/toolkit";
import globalReducer from "./slices/global.slice";
import authReducer from "./slices/auth.slice";
import { authApi } from "./apis/auth/authApi";
import { agentsApi } from "./apis/agents.api";
import { agentCommisionAgreementsApi } from "./apis/agent-commission-agreements.api";
import { agentDtuAccountsApi } from "./apis/agent-dtu-accounts.api";
import { amadeusMultiCredentialsApi } from "./apis/amadeus-multi-credentials.api";
import { agentPccCredentialsApi } from "./apis/agent-pcc-credentials";
import { apiCredentialsApi } from "./apis/api-credentials.api";
import { systemParametersApi } from "./apis/system-parameters.api";
import { bankIdentificationNumbersApi } from "./apis/bank-idntification-numbers.api";
import { flightDurationDepositsApi } from "./apis/flight-duration-deposits.api";
import { pricingUmrohApi } from "./apis/pricing-umroh.api";
import { mutationApiSlice } from "./apis/mutation/index.api";

const rootReducer = combineReducers({
  global: globalReducer,
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
  [agentsApi.reducerPath]: agentsApi.reducer,
  [agentCommisionAgreementsApi.reducerPath]:
    agentCommisionAgreementsApi.reducer,
  [agentCommisionAgreementsApi.reducerPath]:
    agentCommisionAgreementsApi.reducer,
  [agentDtuAccountsApi.reducerPath]: agentDtuAccountsApi.reducer,
  [amadeusMultiCredentialsApi.reducerPath]: amadeusMultiCredentialsApi.reducer,
  [agentPccCredentialsApi.reducerPath]: agentPccCredentialsApi.reducer,
  [apiCredentialsApi.reducerPath]: apiCredentialsApi.reducer,
  [systemParametersApi.reducerPath]: systemParametersApi.reducer,
  [bankIdentificationNumbersApi.reducerPath]:
    bankIdentificationNumbersApi.reducer,
  [flightDurationDepositsApi.reducerPath]: flightDurationDepositsApi.reducer,
  [pricingUmrohApi.reducerPath]: pricingUmrohApi.reducer,
  [mutationApiSlice.reducerPath]: mutationApiSlice.reducer,
});
console.log(rootReducer, "root");

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      agentsApi.middleware,
      agentCommisionAgreementsApi.middleware,
      agentDtuAccountsApi.middleware,
      amadeusMultiCredentialsApi.middleware,
      agentPccCredentialsApi.middleware,
      apiCredentialsApi.middleware,
      systemParametersApi.middleware,
      bankIdentificationNumbersApi.middleware,
      flightDurationDepositsApi.middleware,
      pricingUmrohApi.middleware,
      mutationApiSlice.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
