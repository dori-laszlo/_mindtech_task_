import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dataReducer from './covidData/data.reducer';

export const store = configureStore({
  reducer: {
    dataReducer: dataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppState = ReturnType<typeof dataReducer>;
