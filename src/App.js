import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeaturesPage from "./pages/FeaturesPage";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import TeamPage from "./pages/TeamPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/signin" element={<SigninPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
