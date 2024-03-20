import React, { useEffect, useState } from "react";
import "./styles/WastePOIDetails.css"; // Import CSS for styling
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar"; // Import the 'NavBar' component

const WastePOIDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const username = new URLSearchParams(location.search).get("username");
  const poi = new URLSearchParams(location.search).get("poi");
  const [user, setUser] = useState(null);
  const [wastePOI, setWastePOI] = useState(null);
  const handleViewCarPark = () => {
    // navigate.push(`/nearestPOIs?username=${username}&poi=${poi}`)
    navigate("/nearestCarParks", {
      state: { user: user, wastePOI: wastePOI },
    });
  };

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          `http://localhost:8080/getUser?userName=${username}`
        );
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    async function getWastePOI() {
      try {
        const response = await axios.get(
          `http://localhost:8080/getPOIById?id=${poi}`
        );
        setWastePOI(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getUser();
    getWastePOI();
  }, [username, poi]);

  return (
    <div className="page-container waste-poi-details">
      {wastePOI && user ? (
        <>
          <NavBar points={user.points} username={user.userName} />

          {/* Waste POI Details */}
          <div className="waste-poi-info">
            <h1>Waste POI Details</h1>
            <div className="info-container">
              <div className="info-item">
                <span className="label">Name:</span>
                <span className="value">{wastePOI.poi_name}</span>{" "}
                {/* Assuming wastePOI object has 'name' property */}
              </div>
              <div className="info-item">
                <span className="label">Description:</span>
                <span className="value">{wastePOI.poi_description}</span>{" "}
                {/* Assuming wastePOI object has 'name' property */}
              </div>
              <div className="info-item">
                <span className="label">Address:</span>
                <span className="value">{wastePOI.address}</span>{" "}
                {/* Assuming wastePOI object has 'address' property */}
              </div>
              <div className="info-item">
                <span className="label">Postal Code:</span>
                <span className="value">{wastePOI.poi_postal_code}</span>{" "}
                {/* Assuming wastePOI object has 'address' property */}
              </div>
              <div className="info-item">
                <span className="label">Category:</span>
                <span className="value">{wastePOI.wasteCategory}</span>{" "}
                {/* Assuming wastePOI object has 'category' property */}
              </div>
              {/* Add more information items as needed */}
            </div>
          </div>
          {/* Buttons */}
          <div className="button-container">
            <button className="button" onClick={handleViewCarPark}>
              View Car Parks
            </button>
            <button className="button">View Map</button>
          </div>
        </>
      ) : (
        <div>No waste POI found</div>
      )}
    </div>
  );
};

export default WastePOIDetails;
