import React, { useEffect } from "react";
import _ from "lodash";
import { useState } from "react";
import "./../Style/FrontPage.css";
// import pic1 from "./../img/nat-2.jpg";
import file from "./../Utilities/data/tours.json";

export default function FrontPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(file);
  }, []);

  return (
    <div className="row conatiner m-0 main-div">
      {data.map((i) => {
        return (
          <div className="FrontPage p-5 container-fluid col-lg-4 col-md-4 col-sm-6">
            <div className="card" style={{ width: "10 rem" }}>
              <img className="card-img-top cardPicture" alt="..." />
              <div className="card-body">
                <h5 className="card-title cardTitle">{i.name}</h5>
                <p className="card-text fw-bold">
                  {_.startCase(i.difficulty)} {i.duration}-Day Tour
                </p>
                <p className="card-text ">{i.summary}</p>
              </div>
              <div className="row m-2">
                <p className="col-lg-6">
                  <span className="material-symbols-outlined">location_on</span>
                  {i.startLocation.description}
                </p>
                <p className="col-lg-6">
                  <span className="material-symbols-outlined">event</span>
                  June, 2023
                </p>
                <p className="col-lg-6">
                  <span className="material-symbols-outlined">flag</span>
                  {i.locations.length} Stops
                </p>
                <p className="col-lg-6">
                  <span className="material-symbols-outlined">person</span>
                  {i.maxGroupSize} Peoples
                </p>
              </div>
              <div className="card-body row pl-4 cardFooter">
                <p className="col-lg-7">
                  <p>
                    <i className="fw-bold">${i.price}</i> per person
                  </p>
                  <p>
                    <i className="fw-bold">{i.ratingsAverage}</i> rating (
                    {i.ratingsQuantity})
                  </p>
                </p>
                <p className="col-lg-5 cardButton-main">
                  <button className="btn cardButton">Details</button>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
