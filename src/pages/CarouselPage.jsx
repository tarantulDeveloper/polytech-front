import React, {useState, useEffect} from 'react'
import CarouseService from "../service/carousel_service";
import { useNavigate } from 'react-router-dom';
import MyTable from '../components/MyTable';
import MyModal from '../components/MyModal';

const CarouselPage = () => {
    const [carousel, setCarousel] = useState([]);

  const [newCarousel, setNewCarousel] = useState({
    header: "",
    text: "",
    photoAltText: "",
    photo: null,
  });

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getCarousels();
  }, []);

  const getCarousels = () => {
    setLoading(true);
    CarouseService.getAll()
      .then((res) => setCarousel(res.data))
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
    setNewCarousel({ ...newCarousel, [e.target.name]: value });
  };

  const handleFileChange = (e) => {
    setNewCarousel({ ...newCarousel, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCloseModal();
    const data = new FormData();
    data.append("header", newCarousel.header);
    data.append("text", newCarousel.text);
    data.append("photoAltText", newCarousel.photoAltText);
    data.append("photo", newCarousel.photo);
    setLoading(true);
    CarouseService.createCarousel(data)
      .catch((e) => console.log(e))
      .finally((_) => {
        setLoading(false);
        getCarousels();
      });
  };

  const deleteCarouselById = (id) => {
    CarouseService.deleteCarouselById(id)
      .catch((e) => console.error(e))
      .finally((_) => getCarousels());
  };

  const goToUpdatePage = (id) => {
    navigate(`/carousel/${id}`);
  };

  return (
    <div className="container">
      <div className="row text-center">
        <h2>
          Страница{" "}
          <i>
            <b>Карусели</b>
          </i>
        </h2>
      </div>
      <div className="row">
        <button className="btn btn-success my-4" onClick={handleShowModal}>
          Добавить Карусель
        </button>
      </div>
      <MyTable
      contentArray={carousel}
      goToUpdatePage={goToUpdatePage}
      deleteById={deleteCarouselById}
      isLoading={loading}
      />
      <MyModal
      showModal={showModal}
      handleCloseModal={handleCloseModal}
      entity={"Карусель"}
      handleTextChange={handleTextChange}
      handleFileChange={handleFileChange}
      handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default CarouselPage