/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { useDispatch, useSelector } from 'react-redux';
import { useSelector } from 'react-redux';
// eslint-disable-next-line import/no-cycle
//import { store } from '../../store/store';
import { AccessTokenSelector } from '../../store/selectors/selectors';
import BASE_URL from '../../Base_URL';

// const AccessToken = useSelector(AccessTokenSelector);

export const spotyfyQueryApi = createApi({
  reducerPath: 'spotyfyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      // const { accessToken } = getState().spotyfy;
      const accessToken = useSelector(AccessTokenSelector);
      if (accessToken) {
        headers.set('authorizathion', `Bearer${accessToken}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllTrack: builder.query({
      query: () => 'catalog/track/all',
    }),
  }),
});

export const { useGetAllTrackQuery } = spotyfyQueryApi;
