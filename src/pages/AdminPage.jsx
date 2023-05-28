import React, { useState, useEffect } from "react";
import AdminService from "../service/admin_service";
import MyPuffLoader from "../components/PuffLoader";
import Loader from "../components/Loader";

const AdminPage = () => {
  const [admin, setAdmin] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
  });

  const handleTextChange = (e) => {
    const value = e.target.value;
    setAdmin({ ...admin, [e.target.name]: value });
  };

  const handleFileChange = (e) => {
    setAdmin({ ...admin, photo: e.target.files[0] });
  };

  const checkMe = (e) => {
    if (e.target.value === "") {
      setErrors({ ...errors, [e.target.name]: true });
    } else {
      setErrors({ ...errors, [e.target.name]: false });
    }
  };

  useEffect(() => {
    getMe();
  }, []);

  const getMe = () => {
    setIsLoading(true);
    AdminService.getMe()
      .then((res) => setAdmin(res.data))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("firstName", admin.firstName);
    data.append("lastName", admin.lastName);
    if (typeof admin.photo !== "undefined") {
      data.append("photo", admin.photo);
    }

    setIsLoading(true);
    AdminService.updateMe(data)
      .catch((e) => console.log(e))
      .finally(() => {
        setIsLoading(false);
        getMe();
      });
  };

  const logout = () => {
    sessionStorage.removeItem("userInfo");
    sessionStorage.removeItem("isAuth");
    localStorage.clear();
    window.location.reload();
    window.location.href = "/";
  }

  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="row d-flex justify-content-around align-items-center">
          <div className="col-sm-12 col-md-6 my-5">
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstName" className="form-label">
                Имя
              </label>
              {errors.firstName && (
                <p className="text-danger">Заполните Имя!</p>
              )}
              <input
                type="text"
                onBlur={checkMe}
                className={`form-control ${
                  errors.firstName ? "is-invalid" : ""
                }`}
                required
                id="firstName"
                onChange={handleTextChange}
                name="firstName"
                value={admin.firstName}
              />
              <label htmlFor="lastName" className="form-label">
                Фамилия
              </label>
              {errors.lastName && (
                <p className="text-danger">Заполните Фамилию!</p>
              )}
              <input
                type="text"
                onBlur={checkMe}
                className={`form-control ${
                  errors.lastName ? "is-invalid" : ""
                }`}
                required
                id="lastName"
                onChange={handleTextChange}
                name="lastName"
                value={admin.lastName}
              />
              <label htmlFor="photo" className="form-label pt-3">
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
              <button type="submit" className="btn btn-success my-3">
                Изменить
              </button>
            </form>
          </div>
          <div
            className="col-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-center"
            style={{ width: "150px", height: "150px" }}
          >
            <img
              src={admin.photoUrl}
              alt="my photo"
              className="img-fluid rounded-circle"
            />
            <p className="mt-3">{admin.username}</p>
            <button type="button" className="btn btn-danger" onClick={logout}>Выйти</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
