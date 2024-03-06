import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';
// import './styles/wasterec.css';


const WasteRec = () => {
  
  return (
    <>
      <div>
        <h1>Waste Record </h1>
        <Link to="./AddWaste">Go to Add Waste</Link>
      </div>      
      
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
            This is the Catelog for WasteRec
          </Typography>
        </CardContent>
      </Card>
    </div>
    </>
  );
};

export default WasteRec;
