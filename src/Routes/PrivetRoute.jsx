import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="h-screen flex items-center flex-col justify-center">
        <div className="loading loading-dots loading-lg"></div>
        <p>Loading Please wait...</p>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/singin" state={{ from: location }} replace></Navigate>;
};

PrivetRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivetRoute;
