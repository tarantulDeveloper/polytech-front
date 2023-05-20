import React from 'react';
import Header from "../../Components/header/Header";

const HomePage = () => {
  return (
    <>
      <Header/>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h2>Новости о жизни ЛОВЗ</h2>
            <p>Объявления, связанные с жизнью ЛОВЗ</p>
          </div>
          <div className="col-sm-12 col-md-6">
            <img className="img-fluid" src="https://kloop.kg/wp-content/uploads/2018/03/terminology_coalition-3.png" alt="Фото ЛОВЗ"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;