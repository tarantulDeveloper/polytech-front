import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import MyInput from "../components/MyInput";
import CarouselService from "../service/carousel_service";

const CarouselUpdatePage = () => {
  const { id } = useParams();

  const [carousel, setCarousel] = useState({
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
    CarouselService.getById(id)
      .then((response) => {
        setCarousel(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const handleTextChange = (e) => {
    const value = e.target.value;
    setCarousel({ ...carousel, [e.target.name]: value });
  };

  const handleFileChange = (e) => {
    setCarousel({ ...carousel, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("header", carousel.header);
    data.append("text", carousel.text);
    data.append("photoAltText", carousel.photoAltText);
    if (typeof carousel.photo !== "undefined") {
      data.append("photo", carousel.photo);
    }

    setIsLoading(true);
    CarouselService.updateCarousel(id, data)
      .catch((e) => console.log(e))
      .finally((_) => {
        setIsLoading(false);
        navigate("/carousel");
      });
  };

  const navigateBack = () => {
    navigate("/carousel");
  };

  return (
    <div className="container">
      <h2 className="text-center">Изменить Карусель</h2>
      <MyInput
        isLoading={isLoading}
        content={carousel}
        handleTextChange={handleTextChange}
        handleFileChange={handleFileChange}
        handleSubmit={handleSubmit}
        navigateBack={navigateBack}
      />
    </div>
  )
}

export default CarouselUpdatePage