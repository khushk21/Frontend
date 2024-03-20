import React from "react";
import "./styles/WastePOIDetails.css"; // Import CSS for styling
import { useLocation } from "react-router-dom";

const CarParkList = () => {
  const location = useLocation();
  //   const user = location.state.user;
  const wastePOI = location.state.wastePOI;
  console.log("wastePOI", wastePOI);
  return (
    <div>
      <h1>Car Park List</h1>
    </div>
  );
};

export default CarParkList;
