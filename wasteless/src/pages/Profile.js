import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/NavBar";
import Button from "@mui/material/Button";
import './styles/Profile.css';

const Profile = () => {
  const location = useLocation();
  const username = new URLSearchParams(location.search).get("username");

  const [user] = useState('test');
  const [totalWaste, setTotalWaste] = useState(0)
  const [eWaste, setEWaste] = useState(0);
  const [lightingWaste, setLightingWaste] = useState(0);
  const [wasteTreatment, setWasteTreatment] = useState(0);
  const [cashForTrash, setCashForTrash] = useState(0);
  const [normalWaste, setNormalWaste] = useState(0);

  const generateRandomValue = () => Math.random();

  const generateWasteValues = () => {
    const randomEWaste = generateRandomValue();
    const randomLightingWaste = generateRandomValue();
    const randomWasteTreatment = generateRandomValue();
    const randomCashForTrash = generateRandomValue();
    const randomNormalWaste = generateRandomValue();

    setEWaste(prevEWaste => parseFloat((prevEWaste + randomEWaste).toFixed(3)));
    setLightingWaste(prevLightingWaste => parseFloat((prevLightingWaste + randomLightingWaste).toFixed(3)));
    setWasteTreatment(prevWasteTreatment => parseFloat((prevWasteTreatment + randomWasteTreatment).toFixed(3)));
    setCashForTrash(prevCashForTrash => parseFloat((prevCashForTrash + randomCashForTrash).toFixed(3)));
    setNormalWaste(prevNormalWaste => parseFloat((prevNormalWaste + randomNormalWaste).toFixed(3)));

    const newTotalWaste = totalWaste + randomEWaste + randomLightingWaste + randomWasteTreatment + randomCashForTrash + randomNormalWaste;
    setTotalWaste(parseFloat(newTotalWaste.toFixed(3)));
  }
  
  return (
    <div className="profile-container">
      <Navbar points={user ? user.points : 0} username={username} />
      {user && <h1 style={{ textAlign: "center" }}>Welcome, {user}!</h1>}

      <div className="profile-box">
        <div className="content">
          <img className="circle-image" 
            src="https://as2.ftcdn.net/v2/jpg/02/15/84/43/1000_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" 
            alt="Circular" 
          />
          <h1 className='profile-name'>Profile name: {user}</h1>
          <div className="waste-text-container">
            <p className='total-waste-text'>Total Waste: <span style={{ color: 'red' }}>{totalWaste}</span></p>
            <p>E WASTE: {eWaste}</p>
            <p>LIGHTING WASTE: {lightingWaste}</p>
            <p>WASTE TREATMENT: {wasteTreatment}</p>
            <p>CASH FOR TRASH: {cashForTrash}</p>
            <p>NORMAL WASTE: {normalWaste}</p>
          </div>
          <div className="info-text">
            *Waste weight measurement in grams
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={generateWasteValues}
            fullWidth
            style={{ marginTop: "20px" }}
          >
            Generate Random E-Waste
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
