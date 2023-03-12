/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import { Navigate, Routes, Route, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { FetchUserPreLogIn } from '../../store/actions/creators/creators';

const UserIsLogIn = () => {
  const dispatch = useDispatch();
  const loginDataStorage = JSON.parse(localStorage.getItem('MySpotyfyLoginData'));
  if (loginDataStorage) {
    const fetchData = {
      loginData: {
        id: loginDataStorage.id,
        username: loginDataStorage.username,
      },
      accessToken: loginDataStorage.accessToken,
      refreshToken: loginDataStorage.refreshToken,
      idRefTokenInt: loginDataStorage.idRefTokenInt
    };
    dispatch(FetchUserPreLogIn(fetchData));
    return true;
  }
  return false;
};

function ProtectedRoute({ children, redirectPath = '/login', isAllowed }) {
  if (!isAllowed) {
    if (UserIsLogIn()) {
      return children;
    }
    return <Navigate to={redirectPath} replace />;
  }
  return children;
}
export default ProtectedRoute;
