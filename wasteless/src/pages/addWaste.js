import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';

// import './styles/wasterec.css';


const AddWaste = () => {

  
  return (
    <>
      <div
        className="login-container"
        style={{
          backgroundColor: "#8bc34a",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card style={{ maxWidth: 400 }}> 
          <CardContent>
            <Typography
              variant="h4"
              style={{ textAlign: "center", color: "#8bc34a" }}
            >
              This is the Add Waste page
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AddWaste;
