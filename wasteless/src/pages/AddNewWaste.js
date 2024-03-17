import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Navbar from "../components/NavBar";

const AddNewWaste = () => {
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
      <Navbar points={"0"} />
      <Card style={{ maxWidth: 400 }}>
        <CardContent>
          <Typography
            variant="h4"
            style={{ textAlign: "center", color: "#8bc34a" }}
          >
            Wasteless
          </Typography>

          <div style={{ fontSize: "1.5em", color: "darkgreen" }}>Add Waste</div>
          <br></br>
          <u>Record details of recent waste disposal</u>
          <br />
          <br />
          <div style={{ width: "fit-content" }}>
            Date : <input type="date" name="date"></input>
            <br />
            <br />
            Time : <input type="time" name="time"></input>
            <br />
            <br />
            Enter Weight : <input type="text" name="weight"></input> Kg
            <br />
            <br />
            Waste Category :&nbsp;
            <select name="category">
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
            </select>
          </div>

          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            <button style={{ backgroundColor: "#8bc34a" }}>Add Record</button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddNewWaste;
