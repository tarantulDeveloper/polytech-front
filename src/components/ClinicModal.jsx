import React from "react";
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
  handleSelectChange
}) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Добавить {entity}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <label htmlFor="header" className="form-label">
            Название:
          </label>
          <input
            onChange={handleTextChange}
            type="text"
            name="header"
            id="header"
            className="form-control"
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
          />
          <OblastSelect selectedValue={selectedValue} handleSelectChange={handleSelectChange}/>
          <WeekDays selectedWeekdays={selectedWeekdays} handleCheckboxChange={handleCheckboxChange}/>
          <label htmlFor="photoAltText" className="form-label">
            Альт-й текст картинки:
          </label>
          <input
            onChange={handleTextChange}
            type="text"
            name="photoAltText"
            id="photoAltText"
            className="form-control"
          />
          <label htmlFor="photo" className="form-label">
            Фото, не более 3мб, jpg или png, (Обязательное поле):
          </label>
          <input
            onChange={handleFileChange}
            type="file"
            name="photo"
            id="photo"
            className="form-control"
          />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleCloseModal}>
          Отмена
        </Button>
        <Button variant="success" onClick={handleSubmit}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ClinicModal;
