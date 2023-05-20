import React from "react";
import Header from "../../components/header/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
            <div>
            <h2>Новости о жизни ЛОВЗ</h2>
            <p>Объявления, связанные с жизнью ЛОВЗ</p>
            </div>
            
          </div>
          <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
            <img
              className="img-fluid"
              src="https://kloop.kg/wp-content/uploads/2018/03/terminology_coalition-3.png"
              alt="Фото ЛОВЗ"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
