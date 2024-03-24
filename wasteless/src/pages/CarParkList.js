import React, { useState, useEffect } from "react";
import "./styles/WastePOIDetails.css"; // Import CSS for styling
import { useLocation } from "react-router-dom";
import axios from "axios";
import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Navbar from "../components/NavBar";
import Box from "@mui/material/Box";

const CarParkList = () => {
  const location = useLocation();
  const user = location.state.user;
  const wastePOI = location.state.wastePOI;
  const [carPark, setCarPark] = useState(null);
  const carParkNum = wastePOI.nearbyCarPark;
  console.log("wastePOI", wastePOI);
  useEffect(() => {
    async function getCarkParkInfo() {
      await axios
        .get(
          `http://localhost:8080/retrieveCarParkInfo?carParkNum=${carParkNum}`
        )
        .then((response) => setCarPark(response.data))
        .catch((error) => console.error(error));
    }
    getCarkParkInfo();
  }, [carParkNum]);

  const StyledCard = styled(Card)({
    cursor: "pointer",
    backgroundColor: "#4caf50", // Darker shade of green
    minHeight: "200px",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 0 10px rgba(0,0,0,0.5)",
    },
    transition: "all 0.3s ease",
    width: "300px",
    marginTop: "20px",
  });

  // Function to open Google Maps with directions
  const openGoogleMaps = (latitude, longitude) => {
    const url = `https://www.google.com/maps/dir/?api=1&dirflg=d&destination=${latitude},${longitude}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className="car-park-list-container"
      style={{
        backgroundColor: "#8bc34a",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <Navbar points={user ? user.points : 0} username={user.userName} />
      <h1 style={{ paddingTop: "35px" }}>
        Nearest Available Car Parks: Click to get directions
      </h1>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        style={{ maxWidth: "90%" }} // Limit the width of the container
      >
        {carPark
          ? Object.values(carPark).map((carParkObj, index) => {
              const carParkData = carParkObj[0]; // Extracting CarPark object from the array
              const availability = carParkObj[1]; // Extracting availability information
              return (
                <Box width="90%" m={2}>
                  <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                    key={index}
                  >
                    <StyledCard
                      onClick={() =>
                        openGoogleMaps(
                          carParkData.latitude,
                          carParkData.longitude
                        )
                      }
                    >
                      <CardContent>
                        <Typography variant="h5" component="div" align="center">
                          {carParkData.address} {/* Access the address field */}
                        </Typography>
                        <br />
                        <Typography variant="body">
                          Car Park Type: {carParkData.carParkType}
                        </Typography>
                        <br />
                        <br />
                        <Typography variant="body">
                          Parking Type: {carParkData.parkingType}
                        </Typography>
                        <br />
                        <br />
                        <Typography variant="body">
                          Free Parking: {carParkData.freeParking}
                        </Typography>
                        <br />
                        <br />
                        <Typography variant="body">
                          Vacancy: {availability}
                        </Typography>
                      </CardContent>
                    </StyledCard>
                  </Grid>
                </Box>
              );
            })
          : "No car parks available"}
      </Grid>
    </div>
  );
};

export default CarParkList;
