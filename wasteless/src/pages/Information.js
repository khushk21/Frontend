import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import './styles/wasterec.css';


const Information = () => {

  
  return (
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
            This is the information pages
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Information;