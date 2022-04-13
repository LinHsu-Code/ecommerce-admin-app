import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/signin" replace />;
  }
  return children;
};

export default PrivateRoute;
