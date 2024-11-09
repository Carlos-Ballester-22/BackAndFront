import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { theme } from "./assets/styles/styleAllPages.ts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import FormAddUser from "./pages/FormAddUser.tsx";
import { Router } from "./types/Routers.ts";
import Login from "./pages/Login.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
        <Routes>
          <Route
            path={Router.HOME_PAGE}
            element={<HomePage />}
          />
          <Route
            path={Router.LOGIN}
            element={<Login />}
          />
          <Route
            path={Router.ADD_USER}
            element={<FormAddUser />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);