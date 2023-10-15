import { Breadcrumbs, Box } from "@mui/material";

import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import AppContent from "../../AppContent";
import Term from "../../components/pages/Term";
import PrivacyPolicy from "../../components/pages/PrivacyPolicy";
import { grayColor } from "../../color";

export default function FooterNav() {
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
            style={{ color: grayColor[300], textDecoration: "none" }}
          >
            ホーム
          </Link>
          <Link
            to="/term"
            style={{ color: grayColor[300], textDecoration: "none" }}
          >
            利用規約
          </Link>
          <Link
            to="/privacypolicy"
            style={{ color: grayColor[300], textDecoration: "none" }}
          >
            プライバシーポリシー
          </Link>
        </Breadcrumbs>
      </Box>
    </BrowserRouter>
  );
}
