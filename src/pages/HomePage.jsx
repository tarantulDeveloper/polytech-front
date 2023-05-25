import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Slider from "../components/slider/Slider";
import AboutUs from "../components/AboutUs";
import News from "../components/News";
import HomeContent from "../components/HomeContent";
import HomeContentService from "../service/home_content_service";

const HomePage = () => {
  const [homeContent, setHomeContent] = useState([]);
  useEffect(() => {
    getAllHomeContent();
  },[]);

  const getAllHomeContent = () => {
    HomeContentService.getAllHomeContent()
      .then((res) => setHomeContent(res.data))
      .catch((e) => console.log(e));
  };
  return (
    <>
      <div className="container">
        <Slider />

        <AboutUs />

        {/* <HomeContent /> */}
        {homeContent &&
          homeContent.map((homeElement) => (
            <HomeContent
              key={homeElement.id}
              header={homeElement.header}
              text={homeElement.text}
              photoUrl={homeElement.photoUrl}
              photoAltText={homeElement.photoAltText}
            />
          ))}

        {/* Отдел новостей */}
        <div className="row bg-primary text-white d-flex align-items-stretch text-center p-2 mt-4">
          <h2 className="mb-3">Новости</h2>
          <News />
          <News />
          <News />
          <News />
        </div>
        <div className="d-flex justify-content-center my-3">
          <button type="button" className="btn btn-outline-primary">
            Все новости
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
