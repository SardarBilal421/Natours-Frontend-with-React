import React, { useState } from "react";
// import { useEffect, useState } from "react";
import logoPicture from "./../img/logo-white.png";
// import axios from "axios";
import "./../Style/navbar.css";
// import file from "./../Utilities/data/tours.json";

export function Navbar(props) {
  const { setPage, page } = props;
  const [borderStyle, setBorderStyle] = useState({ border: "none" });

  const togglePage = () => {
    setPage("Signup");
  };
  const togglePage1 = () => {
    setPage("Login");
  };
  return (
    <>
      <nav className="navbar Nav-Bar navbar-expand-lg ">
        <div className="container-fluid m-2">
          <a className="navbar-brand text-white col-lg-5" href="/">
            All Tours
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-between"
            id="navbarSupportedContent"
          >
            <img src={logoPicture} alt="" className="logoPicture" srcSet="" />
            <form className="d-flex gap-4" role="search">
              <button
                type="button"
                onClick={togglePage1}
                className="btn btn-outline-light"
                style={page === "loggedIn" ? borderStyle : null}
              >
                {page === "loggedIn" ? "LOG OUT" : "Log In"}
              </button>

              <button
                type="button"
                onClick={togglePage}
                className="btn btn-outline-light"
                style={page === "loggedIn" ? borderStyle : null}
              >
                {page === "loggedIn" ? (
                  <>
                    <span className="material-symbols-outlined">person</span>
                    USER
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
