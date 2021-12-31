import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function RequireAuthAdmin({ children }) {
  const currentUser = useSelector((state) => state.user);

  return currentUser.userRole === "admin" ? children : <Navigate to="/login" replace />;
}

export default RequireAuthAdmin;
