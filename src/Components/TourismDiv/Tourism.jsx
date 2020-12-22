import React from "react";
import TourismForm from "../Forms/TourismForm";
import "./stylesTourism.css";

export default function Tourism() {
  return (
    <div className="grid-tourism-wrapper">
      <div className="grid-tourism-content">
        <h3 className="grid-tourism-content-subheading-1">
          Gone are the days of ready-made packages!
        </h3>
        <h5 className="grid-tourism-content-para-1">
          Let’s discover the tour plans as per your likes and convenience! Tell
          us about your plans and expectations, and we will put our best efforts
          to make your trip memorable
          <br/>
          <br/>
          Please fill out this form to let us know about your tour plans.
        </h5>
        <TourismForm />
      </div>
    </div>
  );
}
