import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import './styles/Info.css';

export default function Information() {
  return (
    <>
      <div
        className="info"
        style={{
          backgroundColor: "#8bc34a",
        }}
      >
        <h1> Information </h1>
        <h2>Wasteless</h2>
        <p>This purpose of this web application is to promote......</p>
        <p>This purpose of this web application is to promote......</p>
      
        <h2>How to use?</h2>
        <p>This purpose of this web application is to promote......</p>
        <p>Make links clickable links to mentioned pages</p>

        <h2>How to earn points?</h2>
        <p>This purpose of this web application is to promote......</p>
        <p>Make links clickable links to mentioned pages</p>
      </div>

    </>
  );
};


