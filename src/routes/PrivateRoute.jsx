import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import { AuthContext } from "./../Contexts/Context";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return (
      <Navigate to={`/signin`} state={{ from: location }} replace></Navigate>
    );
  }
  return children;
};

export default PrivateRoute;
