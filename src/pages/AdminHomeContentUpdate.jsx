import React, { useState, useEffect } from "react";
import HomeContentService from "../service/home_content_service";
import Loader from "../components/Loader";
import { useParams, useNavigate } from "react-router-dom";
import MyInput from "../components/MyInput";

const AdminHomeContentUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [homeContent, setHomeContent] = useState({
    id: id,
    header: "",
    text: "",
    photoAltText: "",
    photo: null,
    photoUrl: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getHomeContentFromServer();
  }, []);

  const getHomeContentFromServer = () => {
    HomeContentService.getHomeContentById(id)
      .then((res) => setHomeContent(res.data))
      .catch((e) => console.log(e))
      .finally((_) => setIsLoading(false));
  };

  const handleTextChange = (e) => {
    const value = e.target.value;
    setHomeContent({ ...homeContent, [e.target.name]: value });
  };

  const handleFileChange = (e) => {
    setHomeContent({ ...homeContent, photo: e.target.files[0] });
  };

  const navigateBack = () => {
    navigate("/admin-home-content");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = new FormData();
    data.append("header", homeContent.header);
    data.append("text", homeContent.text);
    data.append("photoAltText", homeContent.photoAltText);
    if (typeof homeContent.photo !== "undefined") {
      data.append("photo", homeContent.photo);
    }

    console.log(data.values);
    HomeContentService.updateHomeContent(homeContent.id, data)
      .catch((e) => console.log(e))
      .finally((_) => {
        setIsLoading(false);
        navigate("/admin-home-content");
      });
  };
  return (
    <div className="container">
      <h2 className="text-center">Изменить Home Content</h2>
      <MyInput
        isLoading={isLoading}
        content={homeContent}
        handleTextChange={handleTextChange}
        handleFileChange={handleFileChange}
        handleSubmit={handleSubmit}
        navigateBack={navigateBack}
      />
    </div>
  );
};

export default AdminHomeContentUpdate;
