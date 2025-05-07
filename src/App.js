// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={() => window.location.href = "/"} />} />
        <Route path="/register" element={<Register />} />
        {/* otras rutas */}
      </Routes>
    </Router>
  );
}

export default App;
