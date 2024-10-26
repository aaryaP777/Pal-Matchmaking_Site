import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Sign_in from "./Sign_in.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Sign_in" element={<Sign_in />} />
      </Routes>
      {/* <Home /> */}
    </div>
  );
}

export default App;
