import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/NavBar";
import WasteCategoryChart from "../components/WasteCategoryChart";
import WasteRecordCard from "../components/WasteRecordCard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "./styles/Profile.css";
import axios from "axios";

const Profile = () => {
  const location = useLocation();
  const username = new URLSearchParams(location.search).get("username");
  const handleSignUp = () => {
    window.location.href = "/";
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
  const [user, setUser] = useState(null);

  return (
    <div
      className="profile"
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
      <Navbar points={user ? user.points : 0} username={username} />
      <h1 style={{ paddingTop: "35px" }}>User Profile</h1>

      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Card
            style={{
              margin: "20px",
              backgroundColor: "#4caf50",
              width: "500px",
            }}
          >
            <CardContent style={{ textAlign: "center" }}>
              {user && (
                <>
                  <Typography variant="h4" component="div" align="center">
                    Welcome {user.name}!
                  </Typography>
                  <Typography variant="body1" align="center">
                    Username: {user.userName}
                  </Typography>
                  <Typography variant="body1" align="center">
                    Email: {user.email}
                  </Typography>
                  <Typography variant="body1" align="center">
                    Points Earned: {user.points}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSignUp}
                    style={{ alignSelf: "center", marginTop: "10px" }}
                  >
                    Logout
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" align="center">
            Waste Records
          </Typography>
          {user &&
            user.wasteRecords.map((record, index) => (
              <WasteRecordCard key={index} record={record} />
            ))}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" align="center">
            Waste Category Chart
          </Typography>
          <WasteCategoryChart wasteRecords={user && user.wasteRecords} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
