import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./../Style/signup.css";

export default function Signup() {
  // React Hooks
  const nav = useNavigate();
  // Component Variables
  const URL = "http://127.0.0.1:2300/api/v1/user";
  // Component States
  const [formData, setFormData] = useState({});
  // Component Fucntions
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };
  //Post API  for Sign up
  const onHandleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post(URL, formData, {
        headers: {
          "content-type": "application/json",
        },
      });

      if (response.data.status === "success") {
        console.log("SignedUP");
        nav("/login");
      }
    } catch (error) {
      console.log(error);
      alert("Please Try Again..Something is Very WRong");
    }
  };

  return (
    <div className="main row flex-row">
      <div className="container-fluid col-lg-5 main-card">
        <h3>Create Your Account</h3>
        <form onSubmit={onHandleSubmit}>
          <div class="form-group">
            <label forHtml="name">Your Name</label>
            <input
              type="name"
              class="form-control"
              onChange={handleChange}
              name="name"
              id="name"
              placeholder="Name"
              required
            />
          </div>
          <div class="form-group">
            <label forHtml="name">Email</label>
            <input
              type="email"
              class="form-control"
              onChange={handleChange}
              name="email"
              id="email"
              placeholder="name@example.com"
              required
            />
          </div>
          <div class="form-group">
            <label forHtml="name">Password</label>
            <input
              type="password"
              class="form-control"
              onChange={handleChange}
              name="password"
              id="password"
              placeholder="********"
            />
          </div>

          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}
