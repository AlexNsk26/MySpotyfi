/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { Routes, Route, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import Main from './pages/main/index';
import Login from './pages/login/index';
import Error from './pages/Errrors/index';
import ProtectedRoute from './components/Login/ProtectedRout';
import Sets from './pages/Sets';
import {
  loginDataSelector,
  loginDataLoadingSelector,
  loginDataErrorSelector,
  loginDataErrorMSGSelector,
  AccessTokenSelector,
  userLogInSelector,
} from './store/selectors/selectors';
import GetMyLoginData from './components/LoginStotigeData';

export function AppRoutes() {
  const loginDataStor = useSelector(loginDataSelector);
  const AccessToken = useSelector(AccessTokenSelector);

  const userIsLogIn = useSelector(userLogInSelector);

  const loginData =
    loginDataStor && loginDataStor.username ? loginDataStor : GetMyLoginData();
  const loginDataUsername = loginData ? loginData.username : '';
  // const { typeSet } = useParams;
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute isAllowed={userIsLogIn}>
            <Main loginName={loginDataUsername} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/sets/:typeSet"
        element={
          <ProtectedRoute isAllowed={userIsLogIn}>
            <Sets loginName={loginDataUsername} />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
