import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Shield from "@mui/icons-material/Shield";
import "./styles/NavBar.css";
import Typography from "@mui/material/Typography";

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
            to={`/catalogue?username=${username}`}
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
          {/* <NavLink
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
          </NavLink> */}
          <NavLink
            to={`/profile?username=${username}`}
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
          <NavLink
            to={`/info`}
            className="navLink"
            style={{
              color: "inherit",
              textDecoration: "none",
              marginRight: "20px",
              fontSize: "20px",
            }}
          >
            Information
          </NavLink>

          <Typography
            variant="h6"
            style={{
              color: "white",
              marginRight: "10px",
              fontWeight: "bold",
              paddingTop: "3px",
            }}
          >
            {points}
          </Typography>
          <Shield style={{ color: "white" }} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
