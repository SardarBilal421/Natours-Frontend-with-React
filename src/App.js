import { Navbar } from "./Navbar/Navbar";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./footer/Footer";
import Signup from "./logInSignUp/Signup";
import Login from "./logInSignUp/Login";
import MainPage from "./fontPages/mainPage";

function App() {
  return (
    <>
      <div className="container-fluid m-1">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route exact path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<p>Not found</p>} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
