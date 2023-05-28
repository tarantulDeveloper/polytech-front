import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyInput from "../components/MyInput";
import AboutUsService from "../service/about_us";

const AboutUsUpdatePage = () => {
  const { id } = useParams();

  const [aboutUs, setAboutUs] = useState({
    id: id,
    header: "",
    text: "",
    photoAltText: "",
    photo: null,
    photoUrl: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getAboutUsById(id);
  }, []);

  const getAboutUsById = (id) => {
    setIsLoading(true);
    AboutUsService.getAboutUsById(id)
      .then((response) => {
        setAboutUs(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const handleTextChange = (e) => {
    const value = e.target.value;
    setAboutUs({ ...aboutUs, [e.target.name]: value });
  };

  const handleFileChange = (e) => {
    setAboutUs({ ...aboutUs, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("header", aboutUs.header);
    data.append("text", aboutUs.text);
    data.append("photoAltText", aboutUs.photoAltText);
    if (typeof aboutUs.photo !== "undefined") {
      data.append("photo", aboutUs.photo);
    }

    setIsLoading(true);
    AboutUsService.updateAboutUsById(id, data)
      .catch((e) => console.log(e))
      .finally((_) => {
        setIsLoading(false);
        navigate("/about-us");
      });
  };

  const navigateBack = () => {
    navigate("/about-us");
  };

  return (
    <div className="container">
      <h2 className="text-center">Изменить О НАС</h2>
      <MyInput
        isLoading={isLoading}
        content={aboutUs}
        handleTextChange={handleTextChange}
        handleFileChange={handleFileChange}
        handleSubmit={handleSubmit}
        navigateBack={navigateBack}
      />
    </div>
  );
};

export default AboutUsUpdatePage;
