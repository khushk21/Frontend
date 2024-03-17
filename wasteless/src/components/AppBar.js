import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const AppBarComponent = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <AppBar position="fixed" style={{ backgroundColor: "#006400" }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          WasteLess
        </Typography>
        <Box flexGrow={1} />
        <IconButton edge="end" color="inherit" onClick={handleHomeClick}>
          <HomeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
