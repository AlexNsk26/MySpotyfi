/* eslint-disable implicit-arrow-linebreak */
const spotyfySelector = (store) => store.spotyfy;

export const loginDataSelector = (store) =>
  spotyfySelector(store)?.loginData || {};

export const loginDataLoadingSelector = (store) =>
  spotyfySelector(store)?.loading;

export const loginDataErrorSelector = (store) => spotyfySelector(store)?.error;

export const loginDataErrorMSGSelector = (store) =>
  spotyfySelector(store)?.errorMessage;

export const AccessTokenSelector = (store) =>
  spotyfySelector(store)?.accessToken;

export const RefreshTokenSelector = (store) =>
  spotyfySelector(store)?.refreshToken;
