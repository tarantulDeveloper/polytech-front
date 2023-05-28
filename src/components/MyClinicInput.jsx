import React, { useState } from "react";
import Loader from "./Loader";
import OblastSelect from "./OblastSelect";
import WeekDays from "./WeekDays";
import ServiceList from "./ServiceList";

const MyClinicInput = ({
  isLoading,
  content,
  handleTextChange,
  handleFileChange,
  handleSubmit,
  navigateBack,
  handleSelectChange,
  selectedValue,
  selectedWeekdays,
  handleCheckboxChange,
  selectedServices,
  handleSelectedCheck,
  services,
}) => {
  const [errors, setErrors] = useState({
    header: false,
    text: false,
    photoAltText: false,
    phone: false,
    workTime: false,
    oblast: false,
    workDays: false,
    address: false,
    photoUrl: false,
    webSiteUrl: false,
  });
  const checkMe = (e) => {
    if (e.target.value === "") {
      setErrors({ ...errors, [e.target.name]: true });
    } else {
      setErrors({ ...errors, [e.target.name]: false });
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {isLoading ? (
            <Loader />
          ) : (
            <form className="mb-5" onSubmit={handleSubmit}>
              <label htmlFor="header" className="form-label">
                Название
              </label>
              {errors.header && (
                <p className="text-danger">Заполните Название!</p>
              )}
              <input
                onChange={handleTextChange}
                onBlur={checkMe}
                className={`form-control ${errors.header ? "is-invalid" : ""}`}
                type="text"
                name="header"
                id="header"
                value={content.header}
                required
              />
              <label htmlFor="text" className="form-label">
                Описание:
              </label>
              {errors.text && (
                <p className="text-danger">Заполните Описание!</p>
              )}
              <textarea
                onChange={handleTextChange}
                type="text"
                name="text"
                id="text"
                onBlur={checkMe}
                className={`form-control ${errors.text ? "is-invalid" : ""}`}
                value={content.text}
                required
              />
              <label htmlFor="phone" className="form-label">
                Контактный номер:
              </label>
              {errors.phone && <p className="text-danger">Заполните Номер!</p>}
              <input
                onChange={handleTextChange}
                type="text"
                name="phone"
                id="phone"
                onBlur={checkMe}
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                value={content.phone}
                required
              />
              <label htmlFor="address" className="form-label">
                Адрес:
              </label>
              {errors.address && (
                <p className="text-danger">Заполните Адрес!</p>
              )}
              <input
                onChange={handleTextChange}
                type="text"
                name="address"
                id="address"
                onBlur={checkMe}
                className={`form-control ${errors.address ? "is-invalid" : ""}`}
                value={content.address}
                required
              />
              <label htmlFor="workTime" className="form-label">
                Время работы:
              </label>
              {errors.workTime && (
                <p className="text-danger">Заполните Время!</p>
              )}
              <input
                onChange={handleTextChange}
                type="text"
                name="workTime"
                id="workTime"
                onBlur={checkMe}
                className={`form-control ${
                  errors.workTime ? "is-invalid" : ""
                }`}
                value={content.workTime}
                required
              />
              <label htmlFor="webSiteUrl" className="form-label">
                Веб сайт:
              </label>
              {errors.webSiteUrl && (
                <p className="text-danger">Заполните Веб сайт url!</p>
              )}
              <input
                onChange={handleTextChange}
                type="text"
                name="webSiteUrl"
                id="webSiteUrl"
                onBlur={checkMe}
                className={`form-control ${
                  errors.webSiteUrl ? "is-invalid" : ""
                }`}
                required
                value={content.webSiteUrl}
              />
              <ServiceList
                selectedServices={selectedServices}
                handleCheckboxChange={handleSelectedCheck}
                services={services}
                required
              />
              <OblastSelect
                selectedValue={selectedValue}
                handleSelectChange={handleSelectChange}
              />
              <WeekDays
                selectedWeekdays={selectedWeekdays}
                handleCheckboxChange={handleCheckboxChange}
              />
              <label htmlFor="photoAltText" className="form-label">
                Альт-й текст картинки:
              </label>
              {errors.photoAltText && (
                <p className="text-danger">Заполните Альтернитвное описание!</p>
              )}
              <input
                onChange={handleTextChange}
                type="text"
                name="photoAltText"
                id="photoAltText"
                onBlur={checkMe}
                className={`form-control ${
                  errors.photoAltText ? "is-invalid" : ""
                }`}
                value={content.photoAltText}
                required
              />
              <div className="container p-5">
                <img
                  src={content.photoUrl}
                  alt={content.photoAltText}
                  className="img-fluid"
                />
              </div>

              <label htmlFor="photo" className="form-label">
                Фото, не более 3мб, jpg или png: (если не выбрать то картинка не
                изменится)
              </label>

              <input
                onChange={handleFileChange}
                type="file"
                name="photo"
                id="photo"
                className="form-control"
              />
              <button className="btn btn-success mt-5 w-100" type="submit">
                Изменить
              </button>
              <button
                className="btn btn-danger mt-1 w-100"
                onClick={navigateBack}
              >
                Отмена
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyClinicInput;
