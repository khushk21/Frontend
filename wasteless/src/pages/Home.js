import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div>
      <Typography sx={{ margin: "5%" }} variant="h3" align="center">
        User Names
      </Typography>
      <div>
        <ul className="ul">
          <li>
            <Button sx={{ margin: "2% 3%" }} variant="outlined">
              <Link to="/users/feed">View Users</Link>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
