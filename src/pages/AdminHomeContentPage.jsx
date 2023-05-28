import React, { useEffect, useState } from "react";
import HomeContentService from "../service/home_content_service";
import { useNavigate } from "react-router-dom";
import MyTable from "../components/MyTable";
import MyModal from "../components/MyModal";

const AdminHomeContentPage = () => {
  const [homeContents, setHomeContents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [newHomeContent, setNewHomeContent] = useState({
    header: "",
    text: "",
    photoAltText: "",
    photo: null,
  });
  const navigate = useNavigate();

  useEffect(() => {
    getAllHomeContent();
  }, []);

  const getAllHomeContent = () => {
    setIsLoading(true);
    HomeContentService.getAllHomeContent()
      .then((res) => {
        setHomeContents(res.data);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCloseModal();
    setIsLoading(true);
    const data = new FormData();
    data.append("header", newHomeContent.header);
    data.append("text", newHomeContent.text);
    data.append("photoAltText", newHomeContent.photoAltText);
    data.append("photo", newHomeContent.photo);
    HomeContentService.createHomeContent(data)
      .catch((e) => console.log(e))
      .finally((_) => {
        setIsLoading(false);
        getAllHomeContent();
      });
  };

  const handleTextChange = (e) => {
    const value = e.target.value;
    setNewHomeContent({ ...newHomeContent, [e.target.name]: value });
  };

  const handleFileChange = (e) => {
    setNewHomeContent({ ...newHomeContent, photo: e.target.files[0] });
  };

  const goToUpdatePage = (id) => {
    navigate(`/admin-home-content-update/${id}`);
  };

  const deleteHomeContentById = (id) => {
    HomeContentService.deleteHomeContent(id)
      .catch((e) => console.log(e))
      .finally((_) => getAllHomeContent());
  };

  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center">Страница <i><b>Home Content</b></i></h2>
      </div>
      <div className="row">
        <button className="btn btn-success my-4" onClick={handleShowModal}>
          Добавить Home Content
        </button>
      </div>

      <MyTable
        contentArray={homeContents}
        goToUpdatePage={goToUpdatePage}
        deleteById={deleteHomeContentById}
        isLoading={isLoading}
      />

      <MyModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        entity={"Home Content"}
        handleTextChange={handleTextChange}
        handleFileChange={handleFileChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AdminHomeContentPage;
