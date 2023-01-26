import React from "react";
import "./../Style/signup.css";

export default function Signup() {
  return (
    <div className="main row flex-row">
      <div className="container-fluid col-lg-5 main-card">
        <h3>Create Your Account</h3>
        <form>
          <div class="form-group">
            <label forHtml="name">Your Name</label>
            <input
              type="name   "
              class="form-control"
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
              id="password"
              placeholder="********"
            />
          </div>
          <div class="form-group">
            <label forHtml="name">Confirm Password</label>
            <input
              type="password"
              class="form-control"
              id="cPassword"
              placeholder="********"
            />
          </div>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}
