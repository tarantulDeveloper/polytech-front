import React, { useState } from "react";
import AuthService from "../service/auth";
import Modal from "react-bootstrap/Modal";

const LoginPage = () => {
  const [loginRequest, setLoginRequest] = useState({
    username: "",
    password: "",
  });

  const [show, setShow] = useState(false);

  const [errors, setErrors] = useState({
    username: false,
    password: false,
  });

  const checkMe = (e) => {
    if (e.target.value === "") {
      setErrors({ ...errors, [e.target.name]: true });
    } else {
      setErrors({ ...errors, [e.target.name]: false });
    }
  };


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTextChange = (e) => {
    const value = e.target.value;
    setLoginRequest({ ...loginRequest, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AuthService.login(loginRequest.username, loginRequest.password)
      .then((res) => {
        if (res.data.accessToken && res.data.refreshToken) {
          localStorage.setItem("accessToken", res.data.accessToken);
          localStorage.setItem("refreshToken", res.data.refreshToken);
          localStorage.setItem("refreshToken", res.data.refreshToken);
          sessionStorage.setItem("userInfo", JSON.stringify(res.data.userInfo));
          sessionStorage.setItem("isAuth", true);
        }
        window.location.reload();
        window.location.href="/";
      })
      .catch((e) => {
        handleShow();
        sessionStorage.removeItem("userInfo");
        sessionStorage.removeItem("isAuth");
        localStorage.clear();
      })
      .finally(
        setLoginRequest({
          username: "",
          password: "",
        })
      );
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ошибка входа!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Повторите попытку!</Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-warning"
            onClick={handleClose}
          >
            Закрыть
          </button>
        </Modal.Footer>
      </Modal>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        {errors.username && <p className="text-danger">Заполните username!</p>}
        <input
          type="text"
          onBlur={checkMe}
          className={`form-control ${errors.username ? "is-invalid" : ""}`}
          required
          id="username"
          aria-describedby="useraneHelp"
          onChange={handleTextChange}
          name="username"
          value={loginRequest.username}
        />
        <div id="useraneHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        {errors.password && <p className="text-danger">Заполните password!</p>}
        <input
          type="password"
          onBlur={checkMe}
          className={`form-control ${errors.password ? "is-invalid" : ""}`}
          required
          id="password"
          name="password"
          value={loginRequest.password}
          onChange={handleTextChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default LoginPage;
