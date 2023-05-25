import React from "react";

const HomeContent = ({header, text, photoUrl, photoAltText}) => {
  return (
    <div className="row mt-4">
      <div className="col-sm-12 col-md-6 order-md-2 d-flex justify-content-center align-items-center">
        <div>
          <h2>{header}</h2>
          <p>{text}</p>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 d-flex  justify-content-center align-items-center">
        <img
          className="img-fluid "
          src={`${photoUrl}`}
          alt={`${photoAltText}`}
        />
      </div>
    </div>
  );
};

export default HomeContent;
