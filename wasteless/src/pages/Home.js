import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";

//To add routes to other pages
//For the time being leave it as it is, until other routes created
const Home = () => {
  return (
    <div
      className="home-container"
        style={{
        backgroundColor: "#8bc34a",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography 
        variant="h3" 
        align="center"
        paddingTop="5vh"
        backgroundColor="#8bc34a"
      >
        User Names
      </Typography>
      <div
        style={{
          padding: "10vh",
          minHeight: "20vh",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            width: "35vh",
            align: "center"
          }}
        >
            <Button sx={{ margin: "2% 3%" }} variant="outlined" style={{backgroundColor: "lightblue", fontWeight: "Bold", width: "95%"}}>
              <Link to="/users/feed">View Users</Link>
            </Button>

            <Button sx={{ margin: "2% 3%" }} variant="outlined" style={{backgroundColor: "lightblue", fontWeight: "Bold", width: "95%"}}>
              <Link to="/catelog">Catelog</Link>         
            </Button>

            <Button sx={{ margin: "2% 3%" }} variant="outlined" style={{backgroundColor: "lightblue", fontWeight: "Bold", width: "95%"}}>
              <Link to="/addWaste">Add Waste</Link>
            </Button>

            <Button sx={{ margin: "2% 3%" }} variant="outlined" style={{backgroundColor: "lightblue", fontWeight: "Bold", width: "95%"}}>
              <Link to="/favourites">Favourites</Link>
            </Button>

            <Button sx={{ margin: "2% 3%" }} variant="outlined" style={{backgroundColor: "lightblue", fontWeight: "Bold", width: "95%"}}>
              <Link to="/profile">Profile</Link>
            </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
