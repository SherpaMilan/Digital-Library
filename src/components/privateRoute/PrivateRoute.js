import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children, admin }) => {
  const { user } = useSelector((state) => state.user);

  if (admin && user.role !== "admin") {
    return <h1>You do not have promission here</h1>;
  }

  return user?.uid ? children : <Navigate to="/signin" />;
};
