import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Allbeers from "./pages/Allbeers";
import Onebeer from "./pages/Onebeer";
import Randombeer from "./pages/Randombeer";
import Newbeer from "./pages/Newbeer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/allbeers" element={<Allbeers />}></Route>
        <Route path="/:id" element={<Onebeer />}></Route>
        <Route path="/randombeer" element={<Randombeer />}></Route>
        <Route path="/newbeer" element={<Newbeer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
