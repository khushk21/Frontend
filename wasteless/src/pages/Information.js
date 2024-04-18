import React from "react";
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
        <p>
          WasteLess is a web application that allows users across Singapore to view waste disposal vendors/recycling points of 5 different categories: 
          Normal Waste, EWaste, Lighting Waste, Waste Treatment (Industrial Waste) and Cash for Trash. Under the Smart Nation Singapore program, 
          its purpose is to incentivise users to dispose of waste responsibly. 
          </p>
        <p>
          WasteLess is a web application that educates users on waste disposal and recycling points (Waste POIs) all across Singapore. 
          It provides information about these various waste POIs in the form of description, address, location, working hours, etc. 
          It also allows users to check the real-time parking availability near a Waste POI, should the user be planning to dispose of his waste immediately. 
          Finally, it also gives users general guidelines on how to recycle and allows users to keep track of the personal waste that they dispose of.
          </p>
      
        <h2>How to use?</h2>
        <p>WasteLess provides users with 4 main features with their respective tabs</p>
        <h3><a href="/home">Home</a></h3>
        <p>User's can get the nearest waste POI information to them based on waste category selected.</p>
        <h3><a href="/catalogue">Catalogue</a></h3>
        <p>Users can filter all waste POIs based on waste category.</p>
        <h3><a href="/addwaste">Add Waste</a></h3>
        <p>Users can log their personal waste disposal to earn points and track their history.</p>
        <h3><a href="/profile">Profile</a></h3>
        <p>Users can view their profile and waste disposal history.</p>

        <h2>How to earn points?</h2>
        <p>The points allocated to you are displayed on the shield icon at the top right corner of the screen.
          Points are allocated when record your waste disposal and depending on the type of waste you dispose. 
          The calculation for the points per waste disposal enter is: Weight * Waste category.
        </p>
        <p>The respective points each waste category is valued are as such:</p>
        <table>
          <thead>
            <tr>
              <th>Waste Category</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Normal Waste</td>
              <td>7 points/kg</td>
            </tr>
            <tr>
              <td>EWaste</td>
              <td>3 points/kg</td>
            </tr>
            <tr>
              <td>Lighting Waste</td>
              <td>4 points/kg</td>
            </tr>
            <tr>
              <td>Waste Treatment</td>
              <td>6 points/kg</td>
            </tr>
            <tr>
              <td>Cash for Trash</td>
              <td>9 points/kg</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

