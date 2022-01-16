import React from "react";
import { Routes, Route } from "react-router-dom";
import { SignIn } from "../pages/SignIn";

export const AuthRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
};
