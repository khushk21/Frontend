import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import StarBorder from "@mui/icons-material/StarBorder";
import { useNavigate } from "react-router-dom";

const StyledCard = styled(Card)({
  backgroundColor: "#4caf50", // Darker shade of green
  margin: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "350px", // Set a fixed width
  height: "250px", // Set a fixed height
  padding: "10px",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
  },
  transition: "all 0.3s ease",
  cursor: "pointer",
});

const WastePOICard = ({ poi, user }) => {
  const [wastePOI, setWastePOI] = useState(null);
  const navigate = useNavigate();
  const handleCardClick = (poi) => {
    // setWastePOI(poi);
    console.log("poi test", poi);
    // navigate("/wastePOIdetails", {
    //   state: { poi: poi, user: user },
    // });
    navigate(`/wastePOIdetails?username=${user.userName}&poi=${poi.id}`);
  };
  return (
    <StyledCard
      onClick={() => {
        setWastePOI(poi);
        console.log("poi test", wastePOI, poi);
        handleCardClick(poi);
      }}
    >
      <IconButton
        color="primary"
        style={{ position: "absolute", right: 0, top: 0 }}
        // onClick={(event) => {
        //   event.stopPropagation(); // Prevent the card click event from firing
        //   // Add your logic to favorite the waste POI here
        // }}
      >
        <StarBorder />
      </IconButton>
      <CardContent>
        <Typography variant="h5" component="div">
          {poi.poi_name}
        </Typography>
        <br />
        <Typography variant="body">{poi.address}</Typography>
        <br />
        <br />
        <Typography variant="body">
          Postal Code: {poi.poi_postal_code}
        </Typography>
        <br />
        <br />
        <Typography variant="body">Category: {poi.wasteCategory}</Typography>
      </CardContent>
    </StyledCard>
  );
};

export default WastePOICard;
