import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";

export const UsersRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};
