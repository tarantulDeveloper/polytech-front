import React, { Fragment } from "react";

const AboutUs = () => {
  return (
    <div className="row mt-5">
      <div className="col-sm-12 col-md-6 p-2">
        <h2>Кто такие LOVZ.KG?</h2>
        <p>
          Мы являемся компанией, помогающей облегчить жизнь людей с ограниченными
          возможностями в Кыргызской Республике. Работаем с 1994 года. За это время Мы
          смогли помочь более чем 5 тысяч людям!
        </p>
      </div>
      <div className="col-sm-12 col-md-6 d-flex align-content-center">
        <img className="img-fluid" src="https://images.ctfassets.net/cnu0m8re1exe/7aZeyiA6QhG9WBov0yF33Z/b1a5d16223ec3db1d04c9e11523883d4/shutterstock_1954316851__1_.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill" alt="Photo of a company" />
      </div>
    </div>
  );
};

export default AboutUs;
