import {
  combineReducers,
  configureStore,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import globalReducer from "./slices/global.slice";
import authReducer from "./slices/auth.slice";
import { authApi } from "./apis/auth/authApi";
import { agentsApi } from "./apis/agents/agents.api";
import { agentCommisionAgreementsApi } from "./apis/agents/agent-commission-agreements.api";
import { agentDtuAccountsApi } from "./apis/agents/agent-dtu-accounts.api";

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
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      agentsApi.middleware,
      agentCommisionAgreementsApi.middleware,
      agentDtuAccountsApi.middleware,
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
