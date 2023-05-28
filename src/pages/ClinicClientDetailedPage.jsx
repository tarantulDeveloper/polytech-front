import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ClinicService from "../service/clinic";
import MyPuffLoader from "../components/PuffLoader";
import FeedbackCard from "../components/FeedbackCard";

const ClinicClientDetailedPage = () => {
  const { id } = useParams();
  const [clinic, setClinic] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getClinicById(id);
  }, []);

  const getClinicById = (id) => {
    ClinicService.getClinicById(id)
      .then((res) => setClinic(res.data))
      .catch((e) => console.error(e));
  };

  const goToAddFeedbackPage = (id) => {
    navigate(`/feedback/${id}`);
  };

  const goBack = () => {
    navigate(-1);
  }
  return (
    <>
      {clinic && (
        <div className="container">
          <div className="row">
            <h1 className="text-center">{clinic.header}</h1>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-8">
              <h2>{clinic.oblast}</h2>
              <p>{clinic.text}</p>
            </div>
            <div className="col-sm-12 col-md-4">
              <img
                src={clinic.photoUrl}
                alt={clinic.photoAltText}
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row">
            <h6>Контактный номер: {clinic.phone}</h6>
            <h6>Время работы: {clinic.workTime}</h6>
            <h6>Дни работы: {clinic.workDays}</h6>
            <h6>Адрес: {clinic.address}</h6>
            <h6>Веб-сайт: <a href={clinic.webSiteUrl} target="_blank">{clinic.webSiteUrl}</a></h6>
          </div>
          <div className="row">
            <h6>Услуги: </h6>
            <ol className="list-group list-group-numbered">
              {clinic.clinicWorks.map((clinicWork) => (
                <li key={clinicWork.id} className="list-group-item">
                  {clinicWork.name}
                </li>
              ))}
            </ol>
          </div>
          <div className="row">
            <h2 className="text-center my-4">Отзывы</h2>
          </div>
          {clinic.feedbackList.length === 0 ? (
            <h5>Пока нет отзывов. Будьте первым!</h5>
          ) : (
            <div className="row g-3 mb-5 align-items-stretch">
              {clinic.feedbackList.map((feedback) => (
                <FeedbackCard key={feedback.id} feedback={feedback} />
              ))}
            </div>
          )}
          <div className="row d-flex">
            <button
              type="button"
              className="btn btn-success my-3 "
              onClick={() => goToAddFeedbackPage(id)}
            >
              Оставить Отзыв
            </button>

            <button type="button" className="btn btn-danger my-3" onClick={goBack}>
              Назад
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ClinicClientDetailedPage;
