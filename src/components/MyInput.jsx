import React from "react";
import Loader from "./Loader";

const MyInput = ({
  isLoading,
  content,
  handleTextChange,
  handleFileChange,
  handleSubmit,
  navigateBack
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
                Заглавие
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
                Текст:
              </label>
              <textarea
                onChange={handleTextChange}
                type="text"
                name="text"
                id="text"
                className="form-control"
                value={content.text}
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
              type="button"
                className="btn btn-success mt-5 w-100"
                onClick={handleSubmit}
              >
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

export default MyInput;
