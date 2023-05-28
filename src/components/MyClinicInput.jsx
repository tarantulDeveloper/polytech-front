import React from "react";
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
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {isLoading ? (
            <Loader />
          ) : (
            <form className="mb-5">
              <label htmlFor="header" className="form-label">
                Название
              </label>
              <input
                onChange={handleTextChange}
                type="text"
                name="header"
                id="header"
                className="form-control"
                value={content.header}
              />
              <label htmlFor="text" className="form-label">
                Описание:
              </label>
              <textarea
                onChange={handleTextChange}
                type="text"
                name="text"
                id="text"
                className="form-control"
                value={content.text}
              />
              <label htmlFor="phone" className="form-label">
                Контактный номер:
              </label>
              <input
                onChange={handleTextChange}
                type="text"
                name="phone"
                id="phone"
                className="form-control"
                value={content.phone}
              />
              <label htmlFor="address" className="form-label">
                Адрес:
              </label>
              <input
                onChange={handleTextChange}
                type="text"
                name="address"
                id="address"
                className="form-control"
                value={content.address}
              />
              <label htmlFor="workTime" className="form-label">
                Время работы:
              </label>
              <input
                onChange={handleTextChange}
                type="text"
                name="workTime"
                id="workTime"
                className="form-control "
                value={content.workTime}
              />
              <ServiceList
                selectedServices={selectedServices}
                handleCheckboxChange={handleSelectedCheck}
                services={services}
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
              <input
                onChange={handleTextChange}
                type="text"
                name="photoAltText"
                id="photoAltText"
                className="form-control"
                value={content.photoAltText}
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
              <button
                className="btn btn-success mt-5 w-100"
                onClick={handleSubmit}
              >
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
