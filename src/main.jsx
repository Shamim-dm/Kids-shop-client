import React from "react";
import ReactDOM from "react-dom/client";
import router from './Router/Routers'
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AuthProviders from "./provider/AuthProviders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <AuthProviders>
  <RouterProvider router={router} />
  </AuthProviders>
  </React.StrictMode>
);
