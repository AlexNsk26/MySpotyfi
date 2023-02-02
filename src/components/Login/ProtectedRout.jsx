import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, redirectPath = '/main', isAllowed }) {
  if (isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
}
export default ProtectedRoute;
