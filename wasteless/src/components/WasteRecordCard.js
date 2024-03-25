import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const WasteRecordCard = ({ record }) => {
  return (
    <Card
      style={{ margin: "10px", backgroundColor: "#4caf50", width: "400px" }}
    >
      <CardContent>
        <Typography variant="h6" component="div">
          Date and Time: {new Date(record.dateTime).toLocaleString()}
        </Typography>
        <Typography variant="body1">Category: {record.category}</Typography>
        <Typography variant="body1">Weight: {record.weight} kg</Typography>
      </CardContent>
    </Card>
  );
};

export default WasteRecordCard;
