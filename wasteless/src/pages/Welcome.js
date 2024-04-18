import React from "react";
import { Button } from "@mui/material";
import "../App.css";
import AppBarComponent from "../components/AppBar";

const Home = () => {
  const handleSignUp = () => {
    window.location.href = "/registration";
  };
  const handleSignIn = () => {
    window.location.href = "/login";
  };

  return (
    <div
      className="welcome-container"
      style={{
        backgroundColor: "#8bc34a",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 20px",
      }}
    >
      <AppBarComponent />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSignUp}
        style={{ marginBottom: "20px", maxWidth: "300px", width: "100%" }}
      >
        Sign Up
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSignIn}
        style={{ maxWidth: "300px", width: "100%" }}
      >
        Login
      </Button>
    </div>
  );
};

export default Home;
