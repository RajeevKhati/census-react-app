import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function RequireAuthVolunteer({ children }) {
  const currentUser = useSelector((state) => state.user);

  return currentUser.userRole === "volunteer" ? (
    children
  ) : (
    <Navigate to="/login" replace />
  );
}

export default RequireAuthVolunteer;
