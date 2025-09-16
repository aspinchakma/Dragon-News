import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./../Contexts/Context";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <span className="loading loading-ring loading-xl"></span>;
  }
  if (!user) {
    return <Navigate to={`/signin`}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
