import React from "react";
import "./slider/Slider.css";

const HomeContent = ({ header, text, photoUrl, photoAltText, index }) => {
  const isEven = index % 2 === 0;
  const imagePositionClass = isEven ? "order-md-1" : "order-md-2";
  return (
    <div className="row mt-5">
      <div
        className={`col-sm-12 col-md-6 d-flex justify-content-center align-items-center ${
          isEven ? "order-md-2" : "order-md-1"
        }`}
      >
        <div>
          <h2>{header}</h2>
          <p>{text}</p>
        </div>
      </div>
      <div
        className={`col-sm-12 col-md-6 d-flex  justify-content-center align-items-center ${imagePositionClass}`}
      >
        <img
          className="stretch-horizontal stretch-vertical"
          src={`${photoUrl}`}
          alt={`${photoAltText}`}
        />
      </div>
    </div>
  );
};

export default HomeContent;
