import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Catalogue from "./pages/Catalogue";
import AddNewWaste from "./pages/AddNewWaste";
import Information from "./pages/Information";
import WasteRec from "./pages/WasteRec";
import Home from "./pages/Home";
import WastePOIList from "./pages/WastePOIList";
import Profile from "./pages/Profile";
import WastePOIDetails from "./pages/WastePOIDetails";
import CarParkList from "./pages/CarParkList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/nearestPOIs" element={<WastePOIList />} />
        <Route path="/home" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/addwaste" element={<AddNewWaste />} />
        <Route path="/info" element={<Information />} />
        <Route path="/wasterec" element={<WasteRec />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wastePOIdetails" element={<WastePOIDetails />} />
        <Route path="/nearestCarParks" element={<CarParkList />} />
      </Routes>
    </Router>
  );
}

export default App;
