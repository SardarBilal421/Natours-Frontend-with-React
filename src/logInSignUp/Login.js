import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./../Style/signup.css";
import axios from "axios";
import { LogInContext } from "../Context/loginContext/loginState";

export default function Login() {
  // React Hooks
  const nav = useNavigate();
  // Component Varibales
  const URL = "http://127.0.0.1:2300/api/v1/user/logIn";
  let warningText = "";

  // Context States
  const { setLogIn, formData, setFormData } = useContext(LogInContext);

  // Functions
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  // POST API for Login
  const onHandleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(URL, formData, {
        headers: {
          "content-type": "application/json",
        },
      });

      if (response.data.status === "success") {
        localStorage.setItem("token", response.data.token);
        setLogIn(true);
        nav("/");
      }
    } catch (error) {
      console.log(error);
      alert("Wrong Email/Password");
    }
  };

  return (
    <div className="main row flex-row">
      <div className="container-fluid col-lg-5 main-card">
        <h3>LOG INTO YOUR ACCOUNT</h3>
        <form onSubmit={onHandleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onChange={handleChange}
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Password</label>
            <input
              type="password"
              className="form-control"
              onChange={handleChange}
              id="password"
              name="password"
              placeholder="********"
            />
            <p className="m-3 bg-danger">{warningText}</p>
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}
