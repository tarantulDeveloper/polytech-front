import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";
import ClinicWork from "../../service/clinic_work";
import { Modal, Button } from "react-bootstrap";

const Header = ({
  userInfo,
  isAuth,
  handleFontSizeClick,
  handleColorChange,
  backgroundColor
}) => {
  const [services, setServices] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    getAllServices();
  }, []);

  const handleReset = () => {
    handleFontSizeClick(16);
    handleColorChange("white");
    sessionStorage.removeItem("color");
    sessionStorage.removeItem("fontSize");
    sessionStorage.removeItem("background");
    handleCloseModal();
  };

  const navigate = useNavigate();

  const getAllServices = () => {
    ClinicWork.getAllServices()
      .then((res) => setServices(res.data))
      .catch((e) => console.log(e));
  };

  const goToServicePage = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <nav className={`navbar navbar-expand-md 
    ${backgroundColor === 'blue' || backgroundColor === 'black' ? 'navbar-dark':'navbar-light'}`}>
      <div className="container-fluid">
        <a className="navbar-brand text-uppercase fw-bold" href="#">
          LOVZ.KG
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-center w-100"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav w-100 d-flex">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Главная
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="rehabilitationСenter"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Клиники
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="rehabilitationСenter"
              >
                <li>
                  <NavLink to="/rehabilitation/Бишкек" className="nav-link">
                    Бишкек
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/rehabilitation/Ош" className="nav-link">
                    Ош
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/rehabilitation/Чуй" className="nav-link">
                    Чуй
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/rehabilitation/Иссык-Куль" className="nav-link">
                    Иссык-Куль
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/rehabilitation/Нарын" className="nav-link">
                    Нарын
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/rehabilitation/Талас" className="nav-link">
                    Талас
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/rehabilitation/Баткен" className="nav-link">
                    Баткен
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/rehabilitation/Джалал-Абад"
                    className="nav-link"
                  >
                    Джалал-Абад
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="services"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Услуги
              </a>
              <ul className="dropdown-menu" aria-labelledby="services">
                {services.length !== 0 && (
                  <div>
                    {services.map((service) => (
                      <li
                        key={service.id}
                        className="dropdown-item"
                        onClick={() => goToServicePage(service.id)}
                      >
                        <NavLink className="nav-link">{service.name}</NavLink>
                      </li>
                    ))}
                  </div>
                )}
                {/* <li>
                  <a className="dropdown-item" href="#">
                    Социальная помощь
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Массаж
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Арготерапия
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Физиотерапия
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Логопедия
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Эрготерапия
                  </a>
                </li> */}
              </ul>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" href="#">
                Контакты
              </NavLink>
            </li>

            {isAuth && (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="cms"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Контент
                </a>
                <ul className="dropdown-menu" aria-labelledby="cms">
                  <li>
                    <NavLink to="/admin-home-content" className="nav-link">
                      Home Content
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about-us" className="nav-link">
                      О нас
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/carousel" className="nav-link">
                      Карусель
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/clinics" className="nav-link">
                      Клиники
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/admin/service" className="nav-link">
                      Услуги
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/news-admin" className="nav-link">
                      Новости
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/appeals" className="nav-link">
                      Сообщения
                    </NavLink>
                  </li>
                </ul>
              </li>
            )}

            <ul className="navbar-nav ms-md-auto">
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleShowModal}
                >
                  Версия для слабовидящих
                </button>
              </li>
              {!isAuth && (
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link ">
                    Login
                  </NavLink>
                </li>
              )}
              {userInfo && (
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link ">
                    {userInfo.username}
                  </NavLink>
                </li>
              )}
            </ul>
          </ul>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Версия для слабовидящих</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex my-5 justify-content-around">
            <div>
              <p>Размер шрифта</p>
              <p className="d-flex justify-content-between align-items-center h-100">
                <span
                  tabIndex={1}
                  style={{ fontSize: "20px" }}
                  className="border border-1 border-primary"
                  onClick={() => handleFontSizeClick(20)}
                >
                  A
                </span>
                <span
                  tabIndex={2}
                  style={{ fontSize: "30px" }}
                  className="border border-1 border-warning"
                  onClick={() => handleFontSizeClick(25)}
                >
                  A
                </span>
                <span
                  tabIndex={3}
                  style={{ fontSize: "40px" }}
                  className="border border-1 border-danger"
                  onClick={() => handleFontSizeClick(30)}
                >
                  A
                </span>
              </p>
            </div>
            <div>
              <p>Цвет сайта</p>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div
                  style={{ background: "yellow" }}
                  className="p-2 my-2 text-dark"
                  onClick={() => {
                    handleColorChange("yellow");
                    
                  }}
                >
                  Текст
                </div>
                <div
                  style={{ background: "black" }}
                  className="p-2 my-2 text-white"
                  onClick={() => handleColorChange("black")}
                >
                  Текст
                </div>
                <div
                  style={{ background: "blue" }}
                  className="p-2 my-2 text-white"
                  onClick={() => handleColorChange("blue")}
                >
                  Текст
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleReset}>
            Сбросить
          </Button>
          <button
            type="submit"
            className="btn btn-success ms-auto me-0"
            onClick={handleCloseModal}
          >
            Применить
          </button>
        </Modal.Footer>
      </Modal>
    </nav>
  );
};

export default Header;
