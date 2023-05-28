import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FeedbackService from "../service/feedback_service";

const CreateFeedbackPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [feedback, setFeedback] = useState({
    name: "",
    text: "",
    rating: 1,
  });
  const [errors, setErrors] = useState({
    name: false,
    text: false,
  });

  const checkMe = (e) => {
    if (e.target.value === "") {
      setErrors({ ...errors, [e.target.name]: true });
    } else {
      setErrors({ ...errors, [e.target.name]: false });
    }
  };

  const handleTextChange = (e) => {
    const value = e.target.value;
    setFeedback({ ...feedback, [e.target.name]: value });
  };

  const handleRangeChange = (event) => {
    setFeedback({ ...feedback, rating: parseInt(event.target.value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(feedback);
    FeedbackService.createFeedback(id, feedback)
      .catch((e) => console.log(e))
      .finally((_) => navigate(-1));
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="container">
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
        />
        <div className="d-flex align-middle p-2">
          <label htmlFor="rating" className="form-label mt-auto mb-0">
            Ваша оценка по 5-балльной шкале
          </label>

          <input
            id="rating"
            type="range"
            min="1"
            max="5"
            step="1"
            value={feedback.rating}
            onChange={handleRangeChange}
            className="ms-5"
          />
          <h6 className="my-auto ms-3">{feedback.rating}</h6>
        </div>
        <button type="submit" className="btn btn-primary">
          Отправить
        </button>
        <button type="button" className="btn btn-danger ms-4" onClick={goBack}>
          Назад
        </button>
      </form>
    </div>
  );
};

export default CreateFeedbackPage;
