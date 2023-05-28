import React, { useState } from "react";
import Loader from "./Loader";

const MyNewsInput = ({
  isLoading,
  content,
  handleTextChange,
  handleFileChange,
  handleSubmit,
  navigateBack,
}) => {
  const [errors, setErrors] = useState({
    header: false,
    text: false,
    photoAltText: false,
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
    <div className="container">
      <div className="row">
        <div className="col">
          {isLoading ? (
            <Loader />
          ) : (
            <form className="mb-5" onSubmit={handleSubmit}>
              <label htmlFor="header" className="form-label">
                Заглавие
              </label>
              {errors.header && (
                <p className="text-danger">Заполните Заглавие!</p>
              )}
              <input
                onChange={handleTextChange}
                type="text"
                name="header"
                id="header"
                onBlur={checkMe}
                className={`form-control ${errors.header ? "is-invalid" : ""}`}
                required
                value={content.header}
              />
              <label htmlFor="text" className="form-label">
                Подзаглавие:
              </label>
              {errors.text && (
                <p className="text-danger">Заполните Подзаглавие!</p>
              )}
              <textarea
                onChange={handleTextChange}
                type="text"
                name="text"
                id="text"
                onBlur={checkMe}
                className={`form-control ${errors.text ? "is-invalid" : ""}`}
                required
                value={content.text}
              />
              <label htmlFor="mainText" className="form-label">
                Основной текст:
              </label>
              {errors.mainText && (
                <p className="text-danger">Заполните Основной Текст!</p>
              )}
              <textarea
                onChange={handleTextChange}
                type="text"
                name="mainText"
                id="mainText"
                onBlur={checkMe}
                className={`form-control ${errors.text ? "is-invalid" : ""}`}
                required
                value={content.mainText}
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
                className={`form-control ${
                  errors.photoAltText ? "is-invalid" : ""
                }`}
                required
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
              <button type="submit" className="btn btn-success mt-5 w-100">
                Изменить
              </button>
              <button
                className="btn btn-danger mt-1 w-100"
                onClick={navigateBack}
                type="button"
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

export default MyNewsInput;
