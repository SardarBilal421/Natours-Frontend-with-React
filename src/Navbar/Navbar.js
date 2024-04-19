import React, { useContext } from "react";
import logoPicture from "./../img/logo-white.png";

import "./../Style/navbar.css";
import { LogInContext } from "../Context/loginContext/loginState";
import { Link, useNavigate } from "react-router-dom";

export function Navbar(props) {
  // Constext States
  const { logIn, setLogIn } = useContext(LogInContext);

  //  component Variables
  const borderStyle = { border: "none" };

  // Hooks
  const nav = useNavigate();

  // Functions

  const logOut = () => {
    if (logIn) {
      console.log(localStorage.getItem("token"));
      localStorage.removeItem("token");
      console.log(localStorage.getItem("token"));
      setLogIn(false);
      console.log("Logged OUT");
      nav("/");
    }
  };

  return (
    <>
      <nav className="navbar Nav-Bar navbar-expand-lg ">
        <div className="container-fluid m-2">
          <Link className="navbar-brand text-white col-lg-5" to="/">
            All Tours
          </Link>
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
                className="btn btn-outline-light"
                onClick={logOut}
                style={logIn ? borderStyle : null}
              >
                <Link to="/login" className="linkBtn">
                  {logIn ? "LOG OUT" : "Log In"}
                </Link>
              </button>

              <button
                type="button"
                className="btn btn-outline-light"
                style={logIn ? borderStyle : null}
              >
                <Link to="/signup" className="linkBtn">
                  {logIn ? (
                    <>
                      <span className="material-symbols-outlined">person</span>
                      USER
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Link>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
