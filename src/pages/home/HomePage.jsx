import React from "react";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/Slider";
import AboutUs from "../../components/about-us/AboutUs";
import News from "../../components/news/News";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Slider />
        <AboutUs />
        <div className="row mt-4">
          <div className="col-sm-12 col-md-6 order-md-2 d-flex justify-content-center align-items-center">
            <div>
              <h2>Новости о жизни ЛОВЗ</h2>
              <p>Объявления, связанные с жизнью ЛОВЗ</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 d-flex  justify-content-center align-items-center">
            <img
              className="img-fluid "
              src="https://kloop.kg/wp-content/uploads/2018/03/terminology_coalition-3.png"
              alt="Фото ЛОВЗ"
            />
          </div>
        </div>

        {/* Отдел новостей */}
        <div className='row bg-primary text-white d-flex align-items-stretch text-center p-2 mt-4'>
        <h2 className='mb-3'>Новости</h2>
          <News/>
          <News/>
          <News/>
          <News/>
        </div>
        <div className="d-flex justify-content-center my-3"><button type="button" class="btn btn-outline-primary">Все новости</button></div>
      </div>
    </>
  );
};

export default HomePage;
