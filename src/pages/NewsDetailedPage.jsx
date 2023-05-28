import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NewsDetailedPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }
  return (
    <div className="container p-4">
      <div className="d-flex flex-column ">
        <div className="d-flex justify-content-center align-items-center">
          <img
            src={state.photoUrl}
            alt={state.photoAltText}
            className=" rounded pointer img-fluid"
          />
        </div>
        <h1 className="my-4 pointer">{state.header}</h1>
        <h3 className="mb-4">{state.text}</h3>
        <p>{state.mainText}</p>
        <button type="button" className="btn btn-success ms-auto me-0" onClick={goBack}>Назад</button>
      </div>
    </div>
  );
};

export default NewsDetailedPage;
