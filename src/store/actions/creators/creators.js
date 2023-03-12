import * as MyType from '../types/types';

export const FetchLoginStarted = () => ({
  type: MyType.USER_LOGIN_STARTED,
});

export const FetchLoginSuccess = (loginData) => ({
  type: MyType.USER_LOGIN_SUCCESS,
  payload: {
    ...loginData,
  },
});

export const FetchLoginFailure = (error) => ({
  type: MyType.USER_LOGIN_FAILURE,
  payload: {
    error,
    errorMessage: error.response?.data,
  },
});

export const FetchSignUpStarted = () => ({
  type: MyType.USER_SIGNUP_STARTED,
});

export const FetchSignUpSuccess = (loginData) => ({
  type: MyType.USER_SIGNUP_SUCCESS,
  payload: {
    ...loginData,
  },
});

export const FetchSignUpFailure = (error) => ({
  type: MyType.USER_SIGNUP_FAILURE,
  payload: {
    error,
    errorMessage: error.response?.data,
  },
});

export const FetchSignUpPassNotEqual = (error) => ({
  type: MyType.USER_SIGNUP_PASSNOTEQUAL,
  payload: {
    ...error,
  },
});

export const FetchAccessTokenStarted = () => ({
  type: MyType.USER_ACCESS_TOKEN_STARTED,
});

export const FetchAccessTokenSuccess = (tokenData) => ({
  type: MyType.USER_ACCESS_TOKEN_SUCCESS,
  payload: {
    ...tokenData,
  },
});

export const FetchAccessTokenFailure = (error) => ({
  type: MyType.USER_ACCESS_TOKEN_FAILURE,
  payload: {
    error,
    errorMessage: error.response?.data,
  },
});

export const FetchRefreshTokenStarted = () => ({
  type: MyType.USER_REFRESH_TOKEN_STARTED,
});

export const FetchRefreshTokenSuccess = (tokenData) => ({
  type: MyType.USER_REFRESH_TOKEN_SUCCESS,
  payload: {
    ...tokenData,
  },
});

export const FetchRefreshTokenInterval = (idTokenInt) => ({
  type: MyType.USER_REFRESH_TOKEN_INT,
  payload: idTokenInt,
});

export const FetchRefreshTokenFailure = (error) => ({
  type: MyType.USER_REFRESH_TOKEN_FAILURE,
  payload: {
    error,
    errorMessage: error.response?.data,
  },
});

export const FetchPlayingTrack = (audio) => ({
  type: MyType.ADD_TRACK_PLAYING,
  payload: audio,
});

export const FetchUserLogIn = (logIn) => ({
  type: MyType.USER_LOGIN,
  payload: logIn,
});

export const FetchUserLogOut = () => ({
  type: MyType.USER_LOGOUT,
  payload: {},
});

export const FetchUserPreLogIn = (preLoginData) => ({
  type: MyType.USER_PRELOGIN,
  payload: { ...preLoginData },
});

export const FetchTrackFilter = (filterData) => ({
  type: MyType.ADD_TRACK_FILTER,
  payload: { ...filterData },
});

export const FetchTrackFilterYear = (filterData) => ({
  type: MyType.ADD_TRACK_FILTER_YEAR,
  payload: { ...filterData },
});
