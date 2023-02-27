/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { Routes, Route } from 'react-router-dom';
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
  RefreshTokenSelector,
} from './store/selectors/selectors';

export function AppRoutes() {
  const loginData = useSelector(loginDataSelector);
  const AccessToken = useSelector(AccessTokenSelector);
  // const LoginData = JSON.parse(sessionStorage.getItem('MySpotyfiLogin'));
  // const loginName = LoginData ? LoginData.login : undefined;
  const IsLogIn = () => !!AccessToken;
  return (
    <Routes>
      <Route path="/main" element={<Main loginName={loginData.username} />} />
      <Route
        path="/"
        element={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <ProtectedRoute isAllowed={IsLogIn()}>
            <Login />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/sets/:typeSet" element={<Sets loginName={loginData.username} />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
