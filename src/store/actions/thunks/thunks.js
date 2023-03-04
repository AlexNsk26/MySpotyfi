/* eslint-disable no-unused-vars */
import axios from 'axios';
import BASE_URL from '../../../Base_URL';

import {
  FetchLoginStarted,
  FetchLoginSuccess,
  FetchLoginFailure,
  FetchSignUpStarted,
  FetchSignUpSuccess,
  FetchSignUpFailure,
  FetchAccessTokenSuccess,
  FetchAccessTokenFailure,
  FetchRefreshTokenSuccess,
  FetchRefreshTokenFailure,
  FetchPlayingTrack
} from '../creators/creators';

// eslint-disable-next-line import/prefer-default-export
export const fetchLogin = (bodyLoginData) => async (dispatch) => {
  dispatch(FetchLoginStarted());

  try {
    const { data } = await axios.post(
      `${BASE_URL}user/login/`,
      bodyLoginData,
      axios({
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json',
      })
    );
    dispatch(FetchLoginSuccess(data));
  } catch (error) {
    dispatch(FetchLoginFailure(error));
  }
};
export const fetchSignUp = (bodySignUpData) => async (dispatch) => {
  dispatch(FetchSignUpStarted());
  try {
    const { data } = await axios.post(
      `${BASE_URL}user/signup/`,
      bodySignUpData,
      axios({
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json',
      })
    );
    dispatch(FetchSignUpSuccess(data));
  } catch (error) {
    dispatch(FetchSignUpFailure(error));
  }
};

export const fetchGetToken = (bodyGetTokenData) => async (dispatch) => {
  // dispatch(FetchSignUpStarted());
  try {
    const { data } = await axios.post(
      `${BASE_URL}user/token/`,
      bodyGetTokenData,
      axios({
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json',
      })
    );
    dispatch(FetchAccessTokenSuccess(data));
  } catch (error) {
    dispatch(FetchAccessTokenFailure(error));
  }
};

export const fetchRefreshToken =
  () => async (dispatch, getState) => {
    // dispatch(FetchSignUpStarted());
    const state = getState();
    const bodyRefreshTokenData = { refresh: state.spotyfy.refreshToken };
    try {
      const { data } = await axios.post(
        `${BASE_URL}user/token/refresh/`,
        bodyRefreshTokenData,
        axios({
          headers: { 'Content-Type': 'application/json' },
          responseType: 'json',
        })
      );
      dispatch(FetchRefreshTokenSuccess(data));
    } catch (error) {
      dispatch(FetchRefreshTokenFailure(error));
    }
  };
