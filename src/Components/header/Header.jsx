import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <a className="navbar-brand text-uppercase fw-bold" href="#">LOVZ.KG</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Главная</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="rehabilitationСenter" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Реабилитационные центры
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="rehabilitationСenter">
                                <li><a className="dropdown-item" href="#">Ош</a></li>
                                <li><a className="dropdown-item" href="#">Талас</a></li>
                                <li><a className="dropdown-item" href="#">Джалал-Абад</a></li>
                                <li><a className="dropdown-item" href="#">Нарын</a></li>
                                <li><a className="dropdown-item" href="#">Иссык-Куль</a></li>
                                <li><a className="dropdown-item" href="#">Баткен</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="services" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Услуги
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="services">
                                <li><a className="dropdown-item" href="#">Социальная помощь</a></li>
                                <li><a className="dropdown-item" href="#">Массаж</a></li>
                                <li><a className="dropdown-item" href="#">Арготерапия</a></li>
                                <li><a className="dropdown-item" href="#">Физиотерапия</a></li>
                                <li><a className="dropdown-item" href="#">Логопедия</a></li>
                                <li><a className="dropdown-item" href="#">Эрготерапия</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link"  href="#">Контакты</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;