import React, { useEffect, useState } from "react";
import Slider from "../components/slider/Slider";
import AboutUs from "../components/AboutUs";
import News from "../components/News";
import HomeContent from "../components/HomeContent";
import HomeContentService from "../service/home_content_service";
import AboutUsService from "../service/about_us";
import NewsService from "../service/news_service";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [homeContent, setHomeContent] = useState([]);
  const [aboutUs, setAboutUs] = useState([]);
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAboutUs();
    getAllHomeContent();
    getNews();
  }, []);

  const getAllHomeContent = () => {
    HomeContentService.getAllHomeContent()
      .then((response) => {
        setHomeContent(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAboutUs = () => {
    AboutUsService.getAboutUs()
      .then((res) => setAboutUs(res.data))
      .catch((e) => console.log(e));
  };

  const getNews = () => {
    NewsService.getNewsForClient(0, 3)
    .then(res => setNews(res.data.content))
    .catch(e => console.log(e));
  }

  const goToAllNewsPage = () => {
    navigate("/news");
  }
  return (
    <>
      <div className="container">
        <Slider />

        {aboutUs.length !== 0 && aboutUs.map((about) => <AboutUs 
        key={about.id}
        header={about.header}
        text={about.text}
        photoUrl={about.photoUrl}
        photoAltText={about.photoAltText}/>) }

        {/* <HomeContent /> */}
        {homeContent.length !== 0 &&
          homeContent.map((homeElement, index) => (
            <HomeContent
              key={homeElement.id}
              header={homeElement.header}
              text={homeElement.text}
              photoUrl={homeElement.photoUrl}
              photoAltText={homeElement.photoAltText}
              index={index}
            />
          ))}

        {/* Отдел новостей */}
        <div className="row bg-primary text-white d-flex align-items-stretch text-center p-2 mt-5">
          <h2 className="mb-3">Новости</h2>
          {news.length !== 0 && 
          news.map((n) => (<News newsEntity={n} key={n.id} className="h-100"/>))}
        </div>
        <div className="d-flex justify-content-center my-3">
          <button type="button" className="btn btn-outline-primary" onClick={goToAllNewsPage}>
            Все новости
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
