import { Card, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Feed = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchInitialUsers = async () => {
      const response = await axios.get(`http://localhost:8080/getAllUser`);
      console.log(response.data);
      setUser(response.data);
    };
    fetchInitialUsers();
  }, []);
  console.log(user);
  return (
    <Grid container spacing={2} sx={{ margin: "2%" }}>
      {user &&
        user.map((p) => {
          return (
            <Grid key={p.id} item xs={12} md={6} lg={4}>
              <Card sx={{ padding: "3%", overflow: "hidden", width: "84%" }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "2rem", fontWeight: "600" }}
                >
                  {p.profile}
                </Typography>
                <Typography
                  sx={{ color: "#585858", marginTop: "2%" }}
                  variant="body"
                >
                  Name: {p.name}
                </Typography>
                <br />
                <br />
                <Typography variant="h6">
                  Roll Number: {p.rollNumber}
                </Typography>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Feed;
