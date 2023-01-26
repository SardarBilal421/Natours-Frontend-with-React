import React from "react";
import "./../Style/footerFrontPage.css";

export default function Footer() {
  return (
    <div className="row container-fluid m-0 footer-main">
      <div className="col footer-part-1"></div>
      <div className="col footer-part-2 d-flex flex-row-reverse text-right">
        <div className="row">
          <p className="">
            <a href="/">About us </a>
            <a href="/">Download an App </a>
            <a href="/">Become a guide </a>
            <a href="/">Careers </a>
            <a href="/">Contact</a>
          </p>
        </div>
      </div>
      <p className="text-center" style={{ textAlign: "right", opacity: 0.6 }}>
        © 2023 by Sardar Bilal Rehman.
      </p>
    </div>
  );
}
