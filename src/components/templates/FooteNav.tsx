import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { AppContent } from "../../App";
import Term from "../../components/pages/Term";
import PrivacyPolicy from "../../components/pages/PrivacyPolicy";

export default function FooterNav() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/term" element={<Term />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>

      <nav>
        <Link to="/">ホーム</Link> / <Link to="/term">利用規約</Link> /
        <Link to="/privacypolicy">プライバシーポリシー</Link>
      </nav>
    </BrowserRouter>
  );
}
