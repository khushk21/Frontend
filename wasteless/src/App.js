import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Feed } from "./pages";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Catelog from "./pages/Catelog";
import AddNewWaste from "./pages/AddNewWaste";
import Information from "./pages/Information";
import WasteRec from "./pages/WasteRec";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users/feed" element={<Feed />} />
        <Route path="/home" element={<Home />} />
        <Route path="/catelog" element={<Catelog />} />
        <Route path="/add/new" element={<AddNewWaste />} />
        <Route path="/info" element={<Information />} />
        <Route path="/wasterec" element={<WasteRec />} />
      </Routes>
    </Router>
  );
}

export default App;