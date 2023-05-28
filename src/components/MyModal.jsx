import React from "react";
import { Modal, Button } from "react-bootstrap";

const MyModal = ({
  showModal,
  handleCloseModal,
  entity,
  handleTextChange,
  handleFileChange,
  handleSubmit,
}) => {
  
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Добавить {entity}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <label htmlFor="header" className="form-label">
            Заглавие:
          </label>
          <input
            onChange={handleTextChange}
            type="text"
            name="header"
            id="header"
            className="form-control"
          />
          <label htmlFor="text" className="form-label">
            Текст:
          </label>
          <textarea
            onChange={handleTextChange}
            type="text"
            name="text"
            id="text"
            className="form-control"
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

export default MyModal;
