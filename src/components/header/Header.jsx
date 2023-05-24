import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md ">
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
                  <a className="dropdown-item" href="#">
                    Ош
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Талас
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Джалал-Абад
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Нарын
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Иссык-Куль
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Баткен
                  </a>
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
                <li>
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
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" href="#">
                Контакты
              </NavLink>
            </li>
            <li className="nav-item ms-md-auto">
              <NavLink to="/login" className="nav-link " >
                Login
              </NavLink>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Header;
