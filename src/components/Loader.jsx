import React from "react";
import ClockLoader from "react-spinners/ClockLoader";

const Loader = () => {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <ClockLoader color={"#32a852"} size={180} />
      <h4>Загрузка...</h4>
      <h4>Пожалуйста, не обноляйте страницу.</h4>
    </div>
  );
};

export default Loader;
