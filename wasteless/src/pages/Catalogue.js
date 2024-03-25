import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import CircularProgress from "@mui/material/CircularProgress";
import WastePOICard from "../components/WastePOICard";
import axios from "axios";
import Navbar from "../components/NavBar";

const Catalogue = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [wastePOIs, setWastePOIs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [timeoutError, setTimeoutError] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const username = new URLSearchParams(location.search).get("username");

  useEffect(() => {
    async function getUser() {
      await axios
        .get(`http://localhost:8080/getUser?userName=${username}`)
        .then((response) => setUser(response.data))
        .catch((error) => console.error(error));
    }
    getUser();
  }, [username]);

  // Function to fetch waste POIs based on selected category
  useEffect(() => {
    const fetchWastePOIs = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8080/retrievePOIByCategory?category=${selectedCategory}`
        );
        setWastePOIs(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching waste POIs:", error);
        setTimeoutError(true);
        setLoading(false);
      }
    };

    if (selectedCategory) {
      fetchWastePOIs();
    }
  }, [selectedCategory]);

  // Function to handle category selection change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Timeout to handle long loading times
  useEffect(() => {
    let timer;
    if (loading) {
      timer = setTimeout(() => {
        setTimeoutError(true);
        setLoading(false);
      }, 10000); // 10 seconds timeout
    }

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <div
      className="catalogue-container"
      style={{
        backgroundColor: "#8bc34a",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Navbar
        points={user ? user.points : 0}
        username={user ? user.userName : ""}
      />
      <Card
        style={{
          marginTop: "30px",
          width: "500px",
          backgroundColor: "#4caf50",
        }}
      >
        <CardContent>
          <Typography variant="h4" align="center">
            Catalogue of Waste POIs
          </Typography>
          <Select
            value={selectedCategory}
            onChange={handleCategoryChange}
            displayEmpty
            fullWidth
            style={{ marginTop: 20 }}
          >
            <MenuItem value="" disabled>
              Select Waste Category
            </MenuItem>
            <MenuItem value="NORMAL_WASTE">Normal Waste</MenuItem>
            <MenuItem value="E_WASTE">E-Waste</MenuItem>
            <MenuItem value="LIGHTING_WASTE">Lighting Waste</MenuItem>
            <MenuItem value="WASTE_TREATMENT">Waste Treatment</MenuItem>
            <MenuItem value="CASH_FOR_TRASH">Cash for Trash</MenuItem>
          </Select>
        </CardContent>
      </Card>

      {loading && (
        <div style={{ marginTop: 20 }}>
          <CircularProgress />
          <Typography variant="body1" align="center" color="primary">
            Loading...
          </Typography>
        </div>
      )}

      {timeoutError && (
        <Typography variant="body1" align="center" color="error">
          Timeout error: Please try again later.
        </Typography>
      )}

      {!loading && !timeoutError && (
        <div style={{ marginTop: 20 }}>
          {wastePOIs.map((poi, index) => (
            <WastePOICard key={index} poi={poi} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Catalogue;
