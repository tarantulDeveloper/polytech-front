import React, { useState } from "react";
import WeekDays from "./WeekDays";
import { Modal, Button } from "react-bootstrap";
import OblastSelect from "./OblastSelect";

const ClinicModal = ({
  showModal,
  handleCloseModal,
  entity,
  handleTextChange,
  handleFileChange,
  handleSubmit,
  selectedWeekdays,
  handleCheckboxChange,
  selectedValue,
  handleSelectChange,
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
    photo: false,
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
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Добавить {entity}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <label htmlFor="header" className="form-label">
            Название:
          </label>
          {errors.header && <p className="text-danger">Заполните Название!</p>}
          <input
            onChange={handleTextChange}
            type="text"
            name="header"
            id="header"
            onBlur={checkMe}
            className={`form-control ${errors.header ? "is-invalid" : ""}`}
            required
          />
          <label htmlFor="text" className="form-label">
            Описание:
          </label>
          {errors.text && <p className="text-danger">Заполните Описание!</p>}
          <textarea
            onChange={handleTextChange}
            type="text"
            name="text"
            id="text"
            onBlur={checkMe}
            className={`form-control ${errors.text ? "is-invalid" : ""}`}
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
            required
          />
          <label htmlFor="address" className="form-label">
            Адрес:
          </label>
          {errors.address && <p className="text-danger">Заполните Адрес!</p>}
          <input
            onChange={handleTextChange}
            type="text"
            name="address"
            id="address"
            onBlur={checkMe}
            className={`form-control ${errors.address ? "is-invalid" : ""}`}
            required
          />
          <label htmlFor="workTime" className="form-label">
            Время работы:
          </label>
          {errors.workTime && <p className="text-danger">Заполните Время!</p>}
          <input
            onChange={handleTextChange}
            type="text"
            name="workTime"
            id="workTime"
            onBlur={checkMe}
            className={`form-control ${errors.workTime ? "is-invalid" : ""}`}
            required
          />
          <label htmlFor="webSiteUrl" className="form-label">
            Веб сайт:
          </label>
          {errors.webSiteUrl && <p className="text-danger">Заполните Веб сайт url!</p>}
          <input
            onChange={handleTextChange}
            type="text"
            name="webSiteUrl"
            id="webSiteUrl"
            onBlur={checkMe}
            className={`form-control ${errors.webSiteUrl ? "is-invalid" : ""}`}
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
            required
          />
          <label htmlFor="photo" className="form-label">
            Фото, не более 3мб, jpg или png, (Обязательное поле):
          </label>
          {errors.photo && <p className="text-danger">Выберите фото!</p>}
          <input
            onChange={handleFileChange}
            type="file"
            name="photo"
            id="photo"
            onBlur={checkMe}
            className={`form-control ${errors.photo ? "is-invalid" : ""}`}
            required
          />
          <div className="d-flex mt-3">
            <Button variant="danger" onClick={handleCloseModal}>
              Отмена
            </Button>
            <button type="submit" className="btn btn-success ms-auto me-0">
              Добавить
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ClinicModal;
