import React, { useState, useEffect } from "react";
import NewsService from "../service/news_service";
import MyTable from "../components/MyTable";
import { useNavigate } from "react-router-dom";
import MyNewsModal from "../components/MyNewsModal";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const [newNews, setNewNews] = useState({
    header: "",
    text: "",
    photoAltText: "",
    photo: null,
    mainText: "",
  });

  useEffect(() => {
    getAllNewsForAdmin();
  }, []);

  const getAllNewsForAdmin = () => {
    setIsLoading(true);
    NewsService.getAllAdmin()
      .then((res) => setNews(res.data))
      .catch((e) => console.error(e))
      .finally((_) => setIsLoading(false));
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleTextChange = (e) => {
    const value = e.target.value;
    setNewNews({ ...newNews, [e.target.name]: value });
  };

  const handleFileChange = (e) => {
    setNewNews({ ...newNews, photo: e.target.files[0] });
  };

  const goToUpdatePage = (id) => {
    navigate(`/news-admin-update/${id}`);
  };

  const deleteById = (id) => {
    NewsService.deleteById(id)
      .catch((e) => console.log(e))
      .finally((_) => getAllNewsForAdmin());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCloseModal();
    const data = new FormData();
    data.append("header", newNews.header);
    data.append("text", newNews.text);
    data.append("photoAltText", newNews.photoAltText);
    data.append("photo", newNews.photo);
    data.append("mainText", newNews.mainText);

    setIsLoading(true);

    NewsService.createNews(data)
      .catch((e) => console.log(e))
      .finally((_) => {
        setIsLoading(false);
        getAllNewsForAdmin();
      });
  };

  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center">
          Страница{" "}
          <i>
            <b>Новостей</b>
          </i>
        </h2>
      </div>
      <div className="row">
        <button className="btn btn-success my-4" onClick={handleShowModal}>
          Добавить Новость
        </button>
      </div>
      <MyTable
        contentArray={news}
        goToUpdatePage={goToUpdatePage}
        deleteById={deleteById}
        isLoading={isLoading}
      />

      <MyNewsModal 
      showModal={showModal}
      handleCloseModal={handleCloseModal}
      entity={"Новость"}
      handleTextChange={handleTextChange}
      handleFileChange={handleFileChange}
      handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default NewsPage;
