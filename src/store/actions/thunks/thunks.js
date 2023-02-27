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
} from '../creators/creators';

// eslint-disable-next-line import/prefer-default-export
export const fetchLogin = (bodyLoginData) => async (dispatch) => {
  // axios.defaults.adapter = ['https', 'http'];
  // axios.defaults.headers.common.Accept = 'application/json';
  // axios.defaults.baseURL = `${BASE_URL}user/login`;
  dispatch(FetchLoginStarted());

  try {
    /*     const options = {
      method: 'POST',
      url: `${BASE_URL}user/login/`,
      headers: { 'Content-Type': 'application/json' },
      data: bodyLoginData,
    }; */
    const { data } = await axios.post(
      `${BASE_URL}user/login/`,
      bodyLoginData,
      axios({
        /*   transformResponse: [
          function (dataResp) {
            console.dir(dataResp);
          },
        ], */
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json',
      })
    );
    /*     const { data } = axios
      .request(options)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      }); */

    dispatch(FetchLoginSuccess(data));
  } catch (error) {
    // console.dir(error);
    dispatch(FetchLoginFailure(error));
  }
};
/* axios({
  adapter: ['https'],
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json',
}) */
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
