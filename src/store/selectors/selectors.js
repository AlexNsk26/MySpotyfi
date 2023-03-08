/* eslint-disable implicit-arrow-linebreak */
import { createSelector } from '@reduxjs/toolkit';
import { spotyfyQueryApi } from '../../pages/services/queryApi';

const apiSelectorAllTracks = spotyfyQueryApi.endpoints.getAllTrack.select();
const spotyfySelector = (store) => store.spotyfy;

export const allTracksSelector = createSelector(
  apiSelectorAllTracks,
  (trackResult) => trackResult?.data ?? []
);

export const loginDataSelector = (store) =>
  spotyfySelector(store)?.loginData || {};

export const userLogInSelector = (store) =>
  spotyfySelector(store)?.userLogIn || false;

export const loginDataLoadingSelector = (store) =>
  spotyfySelector(store)?.loading;

export const loginDataErrorSelector = (store) => spotyfySelector(store)?.error;

export const loginDataErrorMSGSelector = (store) =>
  spotyfySelector(store)?.errorMessage;

export const AccessTokenSelector = (store) =>
  spotyfySelector(store)?.accessToken;

export const RefreshTokenSelector = (store) =>
  spotyfySelector(store)?.refreshToken;

export const GetPlayingTrackSelector = (store) =>
  spotyfySelector(store)?.playingTrack;

export const GetFilerTrackSelector = (store) =>
  spotyfySelector(store)?.filters ?? {};

export const yearFilterSelector = (store) =>
  spotyfySelector(store)?.filters['button-year'];

export const GetIdTokenRefIntSelector = (store) =>
  spotyfySelector(store)?.idRefTokenInt;
