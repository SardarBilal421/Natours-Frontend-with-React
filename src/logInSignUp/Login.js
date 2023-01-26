import React from "react";
import "./../Style/signup.css";

export default function login(props) {
  const { setPage } = props;
  const togglePage = () => {
    setPage("loggedIn");
  };

  return (
    <div className="main row flex-row">
      <div className="container-fluid col-lg-5 main-card">
        <h3>LOG INTO YOUR ACCOUNT</h3>
        <form>
          <div className="form-group">
            <label forHtml="name">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label forHtml="name">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="********"
            />
          </div>
          <button type="submit" onClick={togglePage}>
            Log In
            {console.log("loggedIn")}
          </button>
        </form>
      </div>
    </div>
  );
}
