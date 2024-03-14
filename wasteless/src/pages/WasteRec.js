import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import './styles/WasteRec.css'; // Import your CSS file for styling
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function WasteRec() {

  const [activeTab, setActiveTab] = useState('tab1');
  const [tab1Content, setTab1Content] = useState([]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  const SearchBar = () => {
    const handleInputChange = (event) => {
      // Handle input change logic here
    };

    return (
      <form className="search-bar-container">
        <input 
          type="text" 
          placeholder="Search..." 
          onChange={handleInputChange} 
        />
        <button type="submit">Search</button>
      </form>
    );
  };

// Nested Tabs component within WasteRec
const Tabs = () => {
  const [tab1Content, setTab1Content] = useState([]);

  useEffect(() => {
    // Fetch or set Tab 1 content when Tab 1 is selected
    if (activeTab === 'tab1') {
      // Example: Set some sample data for Tab 1 content
      setTab1Content([
        { id: 1, name: 'Item 1', price: '$10' },
        { id: 2, name: 'Item 2', price: '$15' },
        { id: 3, name: 'Item 3', price: '$20' },
      ]);
    }
  }, [activeTab]);

  return (
    <div className="tabs">
      <table>
        <thead>
          <tr>
            <th onClick={() => handleTabChange('tab1')} className={activeTab === 'tab1' ? 'active' : ''}>Waste History</th>
            <th> 
              <Link to="http://localhost:3000/add/new" className={activeTab === 'tab2' ? 'active' : ''}>Add Waste</Link>
            </th>
            {/* Add more tab headings as needed */}
          </tr>
        </thead>
        <tbody>
          {activeTab === 'tab1' && (
            tab1Content.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))
          )}
          {/* Add more tab content cells as needed */}
          {activeTab === 'tab2'}
        </tbody>
      </table>
    </div>
  );
};


  return (
    <>
    <div className="wasterec">
      <div className="wasterec-header">
        <h1>Waste Record</h1>
      </div>

      {/* Render the Tabs component */}
      <Tabs />      

      {/* Render the SearchBar component */}
      <div className="wasterec-search">
        <SearchBar />
      </div>

      {/* Add content for each tab based on the activeTab state */}
      {activeTab === 'tab1' && (
        <div>
          <h2></h2>
          {/* Add content specific to Tab 1 */}
        </div>
      )}
      {activeTab === 'tab2' && (
        <div>
          <h2></h2>
          {/* Add content specific to Tab 2 */}
        </div>
      )}
    </div>
    </>
  );
}
