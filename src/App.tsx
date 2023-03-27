import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/globals.css";
import Level1Page from "./pages/level1_page";
import Level2Page from "./pages/level2_page";
import ErrorPage from "./pages/error_page";

function App() {
  return (
    <Routes>
      <Route index element={<Level1Page />} />
      <Route path="/level1" element={<Level1Page />} />
      <Route path="/level2" element={<Level2Page />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
