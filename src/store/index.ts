import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import { leadsApi } from "./leadsApi";

export const makeStore = () =>
  configureStore({
    reducer: {
      ui: uiReducer,
      [leadsApi.reducerPath]: leadsApi.reducer,
    },
    middleware: (getDefault) => getDefault().concat(leadsApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
