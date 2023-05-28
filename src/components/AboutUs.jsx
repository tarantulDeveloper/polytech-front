import React from "react";
import "./slider/Slider.css";

const AboutUs = ({header, text, photoUrl, photoAltText}) => {
  return (
    <div className="row mt-5">
      <div className="col-sm-12 col-md-6 p-2">
        <h2>{header}</h2>
        <p>
          {text}
        </p>
      </div>
      <div className="col-sm-12 col-md-6 d-flex align-content-center d-flex align-items-center justify-content-center">
        <img className="stretch-horizontal stretch-vertical" src={photoUrl} alt={photoAltText} />
      </div>
    </div>
  );
};

export default AboutUs;
