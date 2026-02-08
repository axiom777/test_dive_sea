import { configureStore } from '@reduxjs/toolkit';
import { nftApi } from './nftApiSlice';
import uiReducer from './uiSlice';

export const store = configureStore({
  reducer: {
    [nftApi.reducerPath]: nftApi.reducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(nftApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
