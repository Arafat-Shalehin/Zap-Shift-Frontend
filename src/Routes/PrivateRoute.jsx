import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router";
import EarthLoader from "../Pages/Shared/EarthLoader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <EarthLoader />
      </div>
    );
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/register"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
