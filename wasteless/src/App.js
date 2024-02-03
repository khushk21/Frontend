import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Feed } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
