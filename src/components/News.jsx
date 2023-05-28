import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const News = ({newsEntity}) => {
  const navigate = useNavigate(); 

  const goToNewsPage = () => {
    const data = newsEntity;
    
    navigate("/news-detailed", {state: data})
  };
  return (
    <div className="col-sm-12 col-md-4 my-2" >
      <div className="d-flex flex-column text-center">
        <div className="d-flex justify-content-center align-items-center">
        <img
          src={newsEntity.photoUrl}
          alt={newsEntity.photoAltText}
          className=" rounded pointer img-fluid"
        />
        </div>
        <h4 className="my-1 pointer">{newsEntity.header}</h4>
        <p>
          {newsEntity.text}
        </p>
        <button type="button" className="btn btn-success mx-5" onClick={() => goToNewsPage(newsEntity)}>Подробнее</button>
      </div>
    </div>
  );
};

export default News;
