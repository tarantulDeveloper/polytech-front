import React, { useState, useEffect } from "react";
import ClinicModal from "../components/ClinicModal";
import MyTable from "../components/MyTable";
import { useNavigate } from "react-router-dom";
import ClinicService from "../service/clinic";
import MyClinicTable from "../components/MyClinicTable";

const ClinicPage = () => {
  const [newClinic, setNewClinic] = useState({
    header: "",
    text: "",
    photoAltText: "",
    phone: "",
    workTime: "",
    oblast: "",
    workDays: "",
    address: "",
    photo: null,
  });
  const [clinics, setClinics] = useState([]);
  const [selectedWeekdays, setSelectedWeekdays] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Бишкек");

  const navigate = useNavigate();

  useEffect(() => {
    getAllClinics();
  }, []);


  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedWeekdays([...selectedWeekdays, value]);
    } else {
      setSelectedWeekdays(selectedWeekdays.filter((day) => day !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCloseModal();
    const data = new FormData();
    data.append("header", newClinic.header);
    data.append("text", newClinic.text);
    data.append("photoAltText", newClinic.photoAltText);
    data.append("phone", newClinic.phone);
    data.append("workTime", newClinic.workTime);
    data.append("oblast", selectedValue);
    data.append("address", newClinic.address);
    data.append("workDays", selectedWeekdays.join(", "));
    data.append("photo", newClinic.photo);
    setLoading(true);
    ClinicService.createClinic(data)
      .catch((e) => console.error(e))
      .finally((_) => {
        setLoading(false);
        getAllClinics();
      });
  };

  const getAllClinics = () => {
    setLoading(true);
    ClinicService.getAllClinics()
      .then((res) => setClinics(res.data))
      .catch((e) => console.error(e))
      .finally((_) => setLoading(false));
  };

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleTextChange = (e) => {
    const value = e.target.value;
    setNewClinic({ ...newClinic, [e.target.name]: value });
  };

  const handleFileChange = (e) => {
    setNewClinic({ ...newClinic, photo: e.target.files[0] });
  };

  const goToUpdatePage = (id) => {
    navigate(`/clinic-update/${id}`);
  };

  const deleteById = (id) => {
    ClinicService.deleteClinic(id)
    .catch(err => console.error(err))
    .finally(_ => getAllClinics())
  };

  // const goToService = (clinicId,) => {
  //   navigate()
  

  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center">Страница <i><b>Клиник</b></i></h2>
      </div>
      <div className="row">
        <button className="btn btn-success my-4" onClick={handleShowModal}>
          Добавить Клинику
        </button>
      </div>
      <MyTable
        contentArray={clinics}
        goToUpdatePage={goToUpdatePage}
        deleteById={deleteById}
        isLoading={loading}
      />
     


      <ClinicModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        entity={"Клинику"}
        handleTextChange={handleTextChange}
        handleFileChange={handleFileChange}
        selectedWeekdays={selectedWeekdays}
        handleCheckboxChange={handleCheckboxChange}
        handleSubmit={handleSubmit}
        selectedValue={selectedValue}
        handleSelectChange={handleSelectChange}
      />
      
    </div>
  );
};

export default ClinicPage;
