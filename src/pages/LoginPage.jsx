import React, { useState } from "react";
import AuthService from "../service/auth";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../service/userSlice";

const LoginPage = () => {
  const [loginRequest, setLoginRequest] = useState({
    username: "",
    password: ""
  
  });

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

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
          dispatch(setUserInfo(res.data))
        }
      })
      .catch((e) => handleShow())
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
        <input
          type="text"
          className="form-control"
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
        <input
          type="password"
          className="form-control"
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
