/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Main from './pages/main/index';
import Login from './pages/login/index';
import Error from './pages/Errrors/index';
import ProtectedRoute from './components/Login/ProtectedRout';
import Sets from './pages/Sets';

export function AppRoutes() {
  const LoginData = JSON.parse(sessionStorage.getItem('MySpotyfiLogin'));
  const loginName = LoginData ? LoginData.login : undefined;
  const IsLogIn = () => !!LoginData;
  return (
    <Routes>
      <Route path="/main" element={<Main loginName={loginName} />} />
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
      <Route path="/sets/:typeSet" element={<Sets loginName={loginName} />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
