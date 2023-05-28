import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ClinicWorkService from "../service/clinic_work";

const ServiceUpdatePage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [service, setService] = useState(state);

  const handleTextChange = (e) => {
    const value = e.target.value;
    setService({ ...service, [e.target.name]: value });
  };

  const navigateBack = () => {
    navigate(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ClinicWorkService.updateService(service.id, service)
      .catch((e) => console.error(e))
      .finally((_) => navigate("/admin/service"));
  };

  return (
    <form className="container">
      <label htmlFor="name" className="form-label"></label>
      <input
        type="text"
        name="name"
        id="name"
        className="form-control"
        value={service.name}
        onChange={handleTextChange}
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
  );
};

export default ServiceUpdatePage;
