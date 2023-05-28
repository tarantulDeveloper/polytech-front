import React, {useState} from "react";
import { Modal, Button } from "react-bootstrap";

const MyNewsModal = ({
  showModal,
  handleCloseModal,
  entity,
  handleTextChange,
  handleFileChange,
  handleSubmit,
}) => {
  const [errors, setErrors] = useState({
    header: false,
    text: false,
    photoAltText: false,
    photo: false,
    mainText: false
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
            Заглавие:
          </label>
          {errors.header && <p className="text-danger">Заполните Заглавие!</p>}
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
            Подзаглавие:
          </label>
          {errors.text && <p className="text-danger">Заполните Подзаглавие!</p>}
          <textarea
            onChange={handleTextChange}
            type="text"
            name="text"
            id="text"
            onBlur={checkMe}
            className={`form-control ${errors.text ? "is-invalid" : ""}`}
            required
          />
          <label htmlFor="mainText" className="form-label">
            Основной текст:
          </label>
          {errors.mainText && <p className="text-danger">Заполните Основной Текст!</p>}
          <textarea
            onChange={handleTextChange}
            type="text"
            name="mainText"
            id="mainText"
            onBlur={checkMe}
            className={`form-control ${errors.mainText ? "is-invalid" : ""}`}
            required
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
  )
};

export default MyNewsModal;
