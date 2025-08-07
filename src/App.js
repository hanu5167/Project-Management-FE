// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Login />} />
      <Route path="/" element={<SignUp />} />
    </Routes>
  );
};

export default App;
