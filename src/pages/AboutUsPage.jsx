import React, { useState, useEffect } from "react";
import AboutUsService from "../service/about_us";
import { useNavigate } from "react-router-dom";
import MyTable from "../components/MyTable";
import MyModal from "../components/MyModal";

const AboutUsPage = () => {
  const [aboutUs, setAboutUs] = useState([]);

  const [newAboutUs, setNewAboutUs] = useState({
    header: "",
    text: "",
    photoAltText: "",
    photo: null,
  });

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getAboutUs();
  }, []);

  const getAboutUs = () => {
    setLoading(true);
    AboutUsService.getAboutUs()
      .then((res) => setAboutUs(res.data))
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
    setNewAboutUs({ ...newAboutUs, [e.target.name]: value });
  };

  const handleFileChange = (e) => {
    setNewAboutUs({ ...newAboutUs, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCloseModal();
    const data = new FormData();
    data.append("header", newAboutUs.header);
    data.append("text", newAboutUs.text);
    data.append("photoAltText", newAboutUs.photoAltText);
    data.append("photo", newAboutUs.photo);
    setLoading(true);
    AboutUsService.createAboutUs(data)
      .catch((e) => console.log(e))
      .finally((_) => {
        setLoading(false);
        getAboutUs();
      });
  };

  const deleteAboutUsById = (id) => {
    AboutUsService.deleteAboutUs(id)
      .catch((e) => console.error(e))
      .finally((_) => getAboutUs());
  };

  const goToUpdatePage = (id) => {
    navigate(`/about-us-update/${id}`);
  };

  return (
    <div className="container">
      <div className="row text-center">
        <h2>
          Страница{" "}
          <i>
            <b>О НАС</b>
          </i>
        </h2>
      </div>
      <div className="row">
        <button className="btn btn-success my-4" onClick={handleShowModal}>
          Добавить О НАС
        </button>
      </div>
      <MyTable
      contentArray={aboutUs}
      goToUpdatePage={goToUpdatePage}
      deleteById={deleteAboutUsById}
      isLoading={loading}
      />
      <MyModal
      showModal={showModal}
      handleCloseModal={handleCloseModal}
      entity={"О НАС"}
      handleTextChange={handleTextChange}
      handleFileChange={handleFileChange}
      handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AboutUsPage;
