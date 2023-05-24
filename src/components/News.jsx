import React, { Fragment } from "react";

const News = () => {
  const goToNewsPage = () => {
    console.log("I'm going to the news page");
  };
  return (
    <div className="col-sm-12 col-md-4 col-lg-3" onClick={goToNewsPage}>
      <div className="d-flex flex-column text-center">
        <img
          src="https://i.pinimg.com/736x/41/f1/86/41f1865ffaba642d7feba2243c215817.jpg"
          alt="news image"
          className="img-fluid rounded pointer"
        />
        <h4 className="my-1 pointer">Заголовок новости</h4>
        <p>
          Здесь будет подзаголовок, а подробнее о самой новости можно будет
          посмотреть кликнув по ней
        </p>
      </div>
    </div>
  );
};

export default News;
