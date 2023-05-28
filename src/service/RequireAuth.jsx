import { Navigate } from "react-router-dom";

const RequireAuth = ({ children, isAuth }) => {
    

  if (isAuth) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default RequireAuth;