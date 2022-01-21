import React from "react";
import { Routes, Route } from "react-router-dom";
import { Contacts } from "../pages/contacts";
import { CreateContact } from "../pages/contacts/create";
import { Dashboard } from "../pages/dashboard";
import { Templates } from "../pages/templates";
import { CreateTemplate } from "../pages/templates/create";

export const UsersRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/templates" element={<Templates />} />
      <Route path="/template/create" element={<CreateTemplate />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/contacts/create" element={<CreateContact />} />
    </Routes>
  );
};
