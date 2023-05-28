import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import news_service from "../service/news_service";
import MyNewsInput from "../components/MyNewsInput";

const NewsUpdatePage = () => {
  const { id } = useParams();

  const [news, setNews] = useState({
    header: "",
    text: "",
    photoAltText: "",
    photo: null,
    mainText: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const getNewsById = (id) => {
    setIsLoading(true);
    news_service
      .getNewsById(id)
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getNewsById(id);
  }, []);

  const navigateBack = () => {
    navigate(-1);
  };

  const handleTextChange = (e) => {
    const value = e.target.value;
    setNews({ ...news, [e.target.name]: value });
  };

  const handleFileChange = (e) => {
    setNews({ ...news, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("header", news.header);
    data.append("text", news.text);
    data.append("photoAltText", news.photoAltText);
    data.append("mainText", news.mainText);
    if (typeof news.photo !== "undefined") {
      data.append("photo", news.photo);
    }

    setIsLoading(true);

    news_service
      .updateNewsById(id, data)
      .catch((e) => console.log(e))
      .finally((_) => {
        setIsLoading(false);
        navigate("/news-admin");
      });
  };

  return (
    <div className="container">
      <h2 className="text-center">Изменить Новость</h2>
      <MyNewsInput
        isLoading={isLoading}
        content={news}
        handleFileChange={handleFileChange}
        handleTextChange={handleTextChange}
        handleSubmit={handleSubmit}
        navigateBack={navigateBack}
      />
    </div>
  );
};

export default NewsUpdatePage;
