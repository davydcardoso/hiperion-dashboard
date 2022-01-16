import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { AuthRoutes } from "./auth.routes";
import { UsersRoutes } from "./users.routes";

export const Routes: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return !isAuthenticated ? <AuthRoutes /> : <UsersRoutes />;
};
