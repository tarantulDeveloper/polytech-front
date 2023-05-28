import React from "react";
import "../components/slider/Slider.css";
import { useNavigate } from "react-router-dom";

const ClinicCard = ({ clinic }) => {
  const navigate = useNavigate();
  const goToDetailedPage = (id) => {
    navigate(`/rehabilitation/detailed/${id}`);
  };
  return (
    <div
      className="border border-1 border-info row rounded mt-3"
      style={{ minHeight: "35vh" }}
    >
      <div className="col-sm-12 col-lg-3 d-flex align-items-center justify-content-center">
        <img
          src={clinic.photoUrl}
          alt={clinic.photoAltText}
          className="img-fluid"
        />
      </div>
      <div className="col-sm-12 col-lg-6 d-flex flex-column">
        <h2 className="text-danger">{clinic.header}</h2>
        <p>{clinic.text}</p>
        <p className="d-flex mb-1 mt-auto">
          <button type="button" className="btn btn-primary ms-auto" onClick={() => goToDetailedPage(clinic.id)}>
            Подробнее
          </button>
        </p>
      </div>
      <div className="col-sm-12 col-lg-3 d-flex flex-column border-start border-info p-3">
        <p>
          Дни: <i>{clinic.workDays}</i>
        </p>
        <p>
          Часы: <b>{clinic.workTime}</b>
        </p>
        <p>
          Адрес: <i>{clinic.address}</i>
        </p>
        <p>Веб сайт: <a href={clinic.webSiteUrl} target="_blank">{clinic.webSiteUrl}</a></p>
        <p>
          Контактный номер: <b>{clinic.phone}</b>
        </p>
        <p className="pb-0 mb-0">Услуги: </p>
        <ol className="list-group list-group-numbered">
          {clinic.clinicWorks.map((clinicWork) => (
            <li key={clinicWork.id} className="list-group-item">
              {clinicWork.name}
            </li>
          ))}
        </ol>
        {/* {clinic.clinicWorks.length != 0 && (
        <div>{clinic.clinicWorks.map((service) => (<h6>{service}</h6>))}</div>)}</p> */}
      </div>
    </div>
  );
};

export default ClinicCard;
