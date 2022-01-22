import axios, { AxiosError } from "axios";
import { signOut } from "../contexts/AuthContext";
import { application } from "../config/application";
import { urls } from "../config/urls";

export function setupApiClient(ctx = undefined) {
  const api = axios.create({
    baseURL:
      application.ambient === "production"
        ? urls.backend_api
        : "http://localhost:3001",
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      console.log(error);
      if (error.response && error.response.status === 401) {
        signOut();
      }

      return Promise.reject(error);
    }
  );

  return api;
}
