import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Users from "./views/Users";

const AppCopy = () => {
  return (
    <div>
    
      <nav style={{ padding: "20px", background: "#6a6868", textAlign : "right"}}>
        <Link to="/" style={{ color: "white", marginRight: "10px" }}>Home</Link>
        <Link to="/about" style={{ color: "white", marginRight: "10px" }}>About</Link>
        <Link to="/users" style={{ color: "white" }}>Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
};

export default AppCopy;