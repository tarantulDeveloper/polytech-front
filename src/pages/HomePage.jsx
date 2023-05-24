import React from "react";
import Header from "../components/header/Header";
import Slider from "../components/slider/Slider";
import AboutUs from "../components/AboutUs";
import News from "../components/News";
import HomeContent from "../components/HomeContent";

const HomePage = () => {
  return (
    <>

      <div className="container">
        <Slider />

        <AboutUs />

        <HomeContent />

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
