import { Navbar } from "./Navbar/Navbar";
import React from "react";

import FrontPage from "./fontPages/FrontPage";
import ProfilePage from "./fontPages/ProfilePage";
import Footer from "./footer/Footer";
import Signup from "./logInSignUp/Signup";
import Login from "./logInSignUp/Login";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("frontPage");

  return (
    <div className="App conatiner m-3">
      <Navbar setPage={setPage} page={page} />
      {page === "frontPage" ? (
        <FrontPage />
      ) : page === "Login" ? (
        <Login setPage={setPage} />
      ) : page === "loggedIn" ? (
        <ProfilePage />
      ) : (
        <Signup />
      )}
      <Footer />
    </div>
  );
}

export default App;
