import React from "react";
import "./../Style/profilePage.css";

export default function ProfilePage() {
  return (
    <div className="main container-fluid m-0 row">
      <div className="row align-center main-card-1">
        <div className="col-lg-4 board-left-side d-flex flex-column">
          <a href="/" className="p2">
            <span className="material-symbols-outlined">settings</span> Settings
          </a>
          <a href="/" className="p2">
            <span className="material-symbols-outlined">business_center</span>{" "}
            My Bookings
          </a>
          <a href="/" className="p2">
            <span className="material-symbols-outlined">star</span> My Reviews
          </a>
          <a href="/" className="p2">
            <span className="material-symbols-outlined">credit_card</span>{" "}
            Biling
          </a>
        </div>

        <div className="col-lg-8 board-rigth-side">
          {" "}
          <div className="container-fluid main-card">
            <h3>YOUR ACCOUNT SETTINGS</h3>
            <form>
              <div className="form-group mt-5">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <span className="material-symbols-outlined">person</span>
                <label htmlFor="profilePic">Choose New Photo</label>
                <input type="file" className="form-control" id="profilePic" />
              </div>

              <button type="submit" className="saveButton">
                SAVE SETTINGS
              </button>
            </form>
          </div>
          <hr />
          <div className="container-fluid main-card">
            <h3>CHANGE YOUR PASSWORD</h3>
            <form>
              <div className="form-group mt-5">
                <label htmlFor="currentPassword">Current Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="currentPassword"
                  placeholder="********"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="newPassword">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                  placeholder="********"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="cPassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="cPassword"
                  placeholder="********"
                  required
                />
              </div>

              <button type="submit" className="saveButton">
                SAVE PASSWORD
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
