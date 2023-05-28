import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";
import ClinicWork from "../../service/clinic_work";
const Header = ({ userInfo, isAuth, setFontSize }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    getAllServices();
  }, []);

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
    <nav className="navbar navbar-expand-md ">
      <button onClick={() => setFontSize(prev => prev + 1)}>+</button>
      <button onClick={() => setFontSize(prev => prev- 1)}>-</button>
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
                Реабилитационные центры
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
                </ul>
              </li>
            )}

            <ul className="navbar-nav ms-md-auto">
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
    </nav>
  );
};

export default Header;
