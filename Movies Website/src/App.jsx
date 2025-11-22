import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Quiz from "./pages/Quiz";
import NavBar from "./components/NavBar";
import "../src/css/index.css"; // global css

function App() {
  // provide dark-mode state so NavBar toggle works
  const [dark, setDark] = useState(false);

  return (
    <Router>
      <div className={dark ? "dark-mode" : "light-mode"}>
        <NavBar dark={dark} setDark={setDark} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
