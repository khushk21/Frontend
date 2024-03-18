import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/NavBar";
import './styles/Profile.css';

const Profile = () => {
  const location = useLocation();
  const username = new URLSearchParams(location.search).get("username");

  const [user, setUser] = useState(null);
  const [totalWaste, setTotalWaste] = useState(0)
  const [eWaste, setEWaste] = useState(0);
  const [lightingWaste, setLightingWaste] = useState(0);
  const [wasteTreatment, setWasteTreatment] = useState(0);
  const [cashForTrash, setCashForTrash] = useState(0);
  const [normalWaste, setNormalWaste] = useState(0);

  return (
    <div className="profile-container">
      <Navbar points={user ? user.points : 0} username={username} />
      {user && <h1 style={{ textAlign: "center" }}>Welcome, {user.name}!</h1>}

      <div className="profile-box">
        <div className="content">
          <img className="circle-image" 
            src="https://as2.ftcdn.net/v2/jpg/02/15/84/43/1000_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" 
            alt="Circular" 
          />
          <h1 className='profile-name'>Profile name: {username}</h1>
          <div className="waste-text-container">
            <p>Total Waste: {totalWaste}</p>
            <p>E WASTE: {eWaste}</p>
            <p>LIGHTING WASTE: {lightingWaste}</p>
            <p>WASTE TREATMENT: {wasteTreatment}</p>
            <p>CASH FOR TRASH: {cashForTrash}</p>
            <p>NORMAL WASTE: {normalWaste}</p>
          </div>
          <div className="info-text">
            *Waste weight measurement in grams
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
