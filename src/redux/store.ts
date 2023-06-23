import {
  combineReducers,
  configureStore,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import globalReducer from "./features/globalSlice";
import authenticationReducer from "./features/authenticationSlice";
import authorizationReducer from "./features/authorizationSlice";

const rootReducer = combineReducers({
  global: globalReducer,
  authentication: authenticationReducer,
  authorization: authorizationReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
