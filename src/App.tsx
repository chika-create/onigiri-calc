import "./App.css";
import React from "react";
import { Breadcrumbs, Box } from "@mui/material";

import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import AppContent from "./components/views/AppContent";
import Term from "./components/pages/Term";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import { grayColors } from "./constants/colors";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/term" element={<Term />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            to="/"
            style={{ color: grayColors[300], textDecoration: "none" }}
          >
            ホーム
          </Link>
          <Link
            to="/term"
            style={{ color: grayColors[300], textDecoration: "none" }}
          >
            利用規約
          </Link>
          <Link
            to="/privacypolicy"
            style={{ color: grayColors[300], textDecoration: "none" }}
          >
            プライバシーポリシー
          </Link>
        </Breadcrumbs>
      </Box>
    </BrowserRouter>
  );
};

export default App;
