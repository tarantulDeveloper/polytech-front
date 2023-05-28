import React, { useState, useEffect } from "react";
import AdminTable from "../components/AdminTable";
import AdminService from "../service/admin_service";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AdminsPage = () => {
  const [admins, setAdmins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const [newAdmin, setNewAdmin] = useState({
    username: "",
    password: "",
  });

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

  const handleTextChange = (e) => {
    const value = e.target.value;
    setNewAdmin({ ...newAdmin, [e.target.name]: value });
  };

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    getAllAdmins();
  }, []);

  const getAllAdmins = () => {
    setIsLoading(true);
    AdminService.getAll()
      .then((res) => setAdmins(res.data))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AdminService.createAdmin(newAdmin)
      .catch((error) => {
        console.log(error);
      })
      .finally((_) => {
        handleCloseModal();
        getAllAdmins();
        setNewAdmin({
          username: "",
          password: "",
        });
      });
  };
  return (
    <div className="container">
      <div className="row">
        <button className="btn btn-success my-4" onClick={handleShowModal}>
          Добавить Админа
        </button>
      </div>
      <div className="row">
        <h3 className="text-center my-3">Список Администраторов</h3>
      </div>
      <AdminTable contentArray={admins} isLoading={isLoading} />
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить Админа</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            {errors.header && (
              <p className="text-danger">Заполните username!</p>
            )}
            <input
              onChange={handleTextChange}
              type="text"
              name="username"
              id="username"
              onBlur={checkMe}
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
              required
              value={newAdmin.username}
            />

            <label htmlFor="password" className="form-label">
              Password:
            </label>
            {errors.password && (
              <p className="text-danger">Заполните password!</p>
            )}
            <input
              onChange={handleTextChange}
              type="text"
              name="password"
              id="password"
              onBlur={checkMe}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              required
              value={newAdmin.password}
            />
            <button type="submit" className="btn btn-success my-3">
              Зарегистрировать
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AdminsPage;
