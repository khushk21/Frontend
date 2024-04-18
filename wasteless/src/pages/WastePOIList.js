import React from "react";
import { useLocation } from "react-router-dom";
import WastePOICard from "../components/WastePOICard";
import Navbar from "../components/NavBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const WastePOIList = () => {
  const location = useLocation();
  const { user, wastePOIs, category } = location.state;
  return wastePOIs ? (
    <div
      className="wastepoilist-container"
      style={{
        backgroundColor: "#8bc34a",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <Navbar
        points={user ? user.points : 0}
        username={user ? user.userName : ""}
      />
      <h1 style={{ textAlign: "center" }}>Nearest {category} WastePOIs</h1>
      <Box width="90%" m={2}>
        <Grid container spacing={3} justifyContent="center" data-testid="wastePOIs-testid">
          {wastePOIs.map((poi, index) => (
            <WastePOICard data-testid="wastepoicard-testid" key={index} poi={poi} user={user} />
          ))}
        </Grid>
      </Box>
    </div>
  ) : (
    <div>No waste POIs found</div>
  );
};

export default WastePOIList;
