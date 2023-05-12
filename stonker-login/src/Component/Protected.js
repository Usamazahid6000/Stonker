import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const isLoggedin = useSelector((state) => state);
  return !isLoggedin ? <Navigate to="/" /> : <Outlet />;
};

export default Protected;
