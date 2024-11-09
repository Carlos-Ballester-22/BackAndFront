import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { Link } from "react-router-dom";
import { Router } from "../types/Routers";
import "../assets/header.css";

const Header: React.FC = () => {
  return (
    <AppBar position="sticky">
      <Toolbar disableGutters>
        <Link
          className="link"
          to={Router.HOME_PAGE}
        >
          {" "}
          HOME{" "}
        </Link>
        <Link className="link" to={Router.ADD_USER}> ADD USER </Link>
        <Link className="link" to={Router.LOGIN}> LOGIN </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
