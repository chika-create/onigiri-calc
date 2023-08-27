import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Term from "./Term";

function PageLink() {
  return (
    <>
      <Link to="/term">利用規約ですよ</Link>
      <Routes>
        <Route path="/term" element={<Term />} />
      </Routes>
    </>
  );
}

export default PageLink;
