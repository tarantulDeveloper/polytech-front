import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import AppealService from "../service/appeal_service";

const ContactPage = () => {
  const [appeal, setAppeal] = useState({
    name: "",
    text: "",
    phone: "",
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    name: false,
    text: false,
    phone: false,
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checkMe = (e) => {
    if (e.target.value === "") {
      setErrors({ ...errors, [e.target.name]: true });
    } else {
      setErrors({ ...errors, [e.target.name]: false });
    }
  };

  const handleTextChange = (e) => {
    const value = e.target.value;
    setAppeal({ ...appeal, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AppealService.createAppeal(appeal)
      .catch((e) => console.error(e))
      .finally(() => {
        handleShow();
        setAppeal({
          name: "",
          text: "",
          phone: "",
        });
      });
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Сообщение отправлено!</Modal.Title>
        </Modal.Header>
        <Modal.Body>С вами скоро свяжутся по указанному номеру!</Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-success"
            onClick={handleClose}
          >
            Закрыть
          </button>
        </Modal.Footer>
      </Modal>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="form-label">
          Имя
        </label>
        {errors.name && <p className="text-danger">Заполните имя!</p>}
        <input
          type="text"
          id="name"
          onChange={handleTextChange}
          name="name"
          onBlur={checkMe}
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          required
          value={appeal.name}
        />
        <label htmlFor="text" className="form-label">
          Сообщение
        </label>
        {errors.text && <p className="text-danger">Заполните сообщение!</p>}
        <textarea
          type="text"
          onBlur={checkMe}
          className={`form-control ${errors.text ? "is-invalid" : ""}`}
          required
          id="text"
          onChange={handleTextChange}
          name="text"
          value={appeal.text}
        />
        <label htmlFor="phone" className="form-label">
          Телефон
        </label>
        {errors.phone && <p className="text-danger">Заполните номер!</p>}
        <input
          type="text"
          id="phone"
          onChange={handleTextChange}
          name="phone"
          onBlur={checkMe}
          className={`form-control ${errors.phone ? "is-invalid" : ""}`}
          required
          value={appeal.phone}
        />
        <div className="d-flex mt-3">
          <button type="submit" className="btn btn-primary">
            Отправить
          </button>
          <button
            type="button"
            className="btn btn-danger ms-4"
            onClick={goBack}
          >
            Назад
          </button>
        </div>
      </form>
      <div className="row mt-5">
        <h5>пр. Чуй 255а</h5>
        <h5>Телефон: 0500 09 09 09</h5>
        <h5>Пн-Пт 09:00-18:00</h5>
      </div>
    </div>
  );
};

export default ContactPage;
