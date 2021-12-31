import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function RequireAuth({ children }) {
  const currentUser = useSelector((state) => state.user);

  return currentUser.isLoggedIn ? children : <Navigate to="/login" replace />;
}

export default RequireAuth;
