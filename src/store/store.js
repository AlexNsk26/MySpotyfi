/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import SpotyfyReducer from './reducers/spotyfyReducer';
import { spotyfyQueryApi } from '../pages/services/queryApi';

export const store = configureStore({
  reducer: {
    spotyfy: SpotyfyReducer,
    [spotyfyQueryApi.reducerPath]: spotyfyQueryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(spotyfyQueryApi.middleware, thunk),
});
