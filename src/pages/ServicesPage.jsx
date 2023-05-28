import React, { useEffect, useState } from "react";
import ClinicWork from "../service/clinic_work";
import { Table } from "react-bootstrap";
import Loader from "../components/Loader";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newService, setNewService] = useState({
    name: "",
  });
  const navigate = useNavigate();

  const handleTextChange = (e) => {
    const value = e.target.value;
    setNewService({ ...newService, [e.target.name]: value });
  };

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    getAllServices();
  }, []);

  const getAllServices = () => {
    setIsLoading(true);
    ClinicWork.getAllServices()
      .then((res) => {setServices(res.data); console.log(res.data);})
      .catch((e) => console.error(e))
      .finally((_) => setIsLoading(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCloseModal();
    setIsLoading(true);
    ClinicWork.createService(newService)
      .catch((e) => console.error(e))
      .finally((_) => {
        setIsLoading(false);
        getAllServices();
      });
  };

  const goToUpdatePage = (obj) => {
    const data = obj;
    navigate("/service/update", {state: data});
  }
  return (
    <div className="container">
      <div className="row text-center">
        <h2>
          Страница{" "}
          <i>
            <b>Услуг</b>
          </i>
        </h2>
      </div>
      <div className="row">
        <button
          type="button"
          className="btn btn-success my-4"
          onClick={handleShowModal}
        >
          Добавить услугу
        </button>
      </div>
      <div className="row">
        {isLoading ? (
          <Loader />
        ) : (
          <Table bordered hover responsive>
            <thead>
              <tr className="text-center">
                <th>#</th>
                <th>Название</th>
                <th>Изменить</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={service.id}>
                  <td>{index + 1}</td>
                  <td>{service.name}</td>
                  <td className="text-center">
                    <button type="button" className="btn btn-primary"
                    onClick={() => goToUpdatePage(service)}>
                      Изменить
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить Услугу</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label htmlFor="name" className="form-label">
              Название:
            </label>
            <input
              onChange={handleTextChange}
              type="text"
              name="name"
              id="name"
              className="form-control"
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseModal}>
            Отмена
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ServicesPage;
