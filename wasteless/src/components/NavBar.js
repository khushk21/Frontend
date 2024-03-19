import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Shield from "@mui/icons-material/Shield";
import "./styles/NavBar.css";

const Navbar = ({ points, username }) => {
  return (
    <div>
      <AppBar position="fixed" style={{ backgroundColor: "#006400" }}>
        <Toolbar>
          <NavLink
            to="/"
            exact
            style={{
              textDecoration: "none",
              color: "inherit",
              fontSize: "20px",
            }}
          >
            WasteLess
          </NavLink>

          <Box flexGrow={1} />
          <NavLink
            to={`/home?username=${username}`}
            exact
            className="navLink"
            style={{
              color: "inherit",
              textDecoration: "none",
              marginRight: "20px",
              fontSize: "20px",
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/Catalogue"
            className="navLink"
            style={{
              color: "inherit",
              textDecoration: "none",
              marginRight: "20px",
              fontSize: "20px",
            }}
          >
            Catalogue
          </NavLink>
          <NavLink
            to={`/addwaste?username=${username}`}
            className="navLink"
            style={{
              color: "inherit",
              textDecoration: "none",
              marginRight: "20px",
              fontSize: "20px",
            }}
          >
            Add Waste
          </NavLink>
          <NavLink
            to="/favourite"
            className="navLink"
            style={{
              color: "inherit",
              textDecoration: "none",
              marginRight: "20px",
              fontSize: "20px",
            }}
          >
            Favourite
          </NavLink>
          <NavLink
            to="/profile"
            className="navLink"
            style={{
              color: "inherit",
              textDecoration: "none",
              marginRight: "20px",
              fontSize: "20px",
            }}
          >
            Profile
          </NavLink>

          <Badge badgeContent={points} color="secondary">
            <Shield />
          </Badge>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
