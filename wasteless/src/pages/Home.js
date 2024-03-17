import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import axios from "axios";
import Navbar from "../components/NavBar";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const Home = () => {
  const location = useLocation();
  const username = new URLSearchParams(location.search).get("username");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const wasteCategories = [
    "E WASTE",
    "LIGHTING WASTE",
    "WASTE TREATMENT",
    "CASH FOR TRASH",
    "NORMAL WASTE",
  ];

  const requestCategory = {
    "E WASTE": "E_WASTE",
    "LIGHTING WASTE": "LIGHTING_WASTE",
    "WASTE TREATMENT": "WASTE_TREATMENT",
    "CASH FOR TRASH": "CASH_FOR_TRASH",
    "NORMAL WASTE": "NORMAL_WASTE",
  };

  useEffect(() => {
    async function getUser() {
      await axios
        .get(`http://localhost:8080/getUser?userName=${username}`)
        .then((response) => setUser(response.data))
        .catch((error) => console.error(error));
    }
    getUser();
  }, [username]);

  const handleCardClick = async (category) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);
        const wastePOIs = await axios.get(
          `http://localhost:8080/retrieveNearestPOIs?latitude=${latitude}&longitude=${longitude}&category=${requestCategory[category]}`
        );
        console.log(wastePOIs.data);
        navigate("/nearestPOIs", {
          state: {
            user: user,
            wastePOIs: wastePOIs.data,
            category: category,
          },
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const StyledCard = styled(Card)({
    cursor: "pointer",
    backgroundColor: "#4caf50", // Darker shade of green
    minHeight: "100px",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 0 10px rgba(0,0,0,0.5)",
    },
    transition: "all 0.3s ease",
  });

  return (
    <div
      className="home-container"
      style={{
        backgroundColor: "#8bc34a",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Navbar points={user ? user.points : 0} username={username} />
      {user && <h1 style={{ textAlign: "center" }}>Welcome, {user.name}!</h1>}

      <Box width="80%" m={2}>
        {/* Display waste categories */}
        <Grid container spacing={3} justifyContent="center">
          {wasteCategories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
              <StyledCard onClick={() => handleCardClick(category)}>
                <CardContent>
                  <Typography variant="h6" component="div" align="center">
                    {category}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
