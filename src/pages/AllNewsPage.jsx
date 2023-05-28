import React, { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";
import NewsService from "../service/news_service";
import News from "../components/News";

const AllNewsPage = () => {
  const [currentPage, setCurrentPage] = useState(0); // Set initial page to 0
  const [totalPages, setTotalPages] = useState(0);
  const [news, setNews] = useState([]);
  const pageSize = 9;

  useEffect(() => {
    getAllNews(0, pageSize);
  }, []);

  const getAllNews = (pageNo, pageSize) => {
    NewsService.getNewsForClient(pageNo, pageSize)
      .then((res) => {
        const { content, totalPages, number } = res.data;
        setNews(content);
        setTotalPages(totalPages);
        setCurrentPage(number);
      })
      .catch((e) => console.error(e));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    getAllNews(page, pageSize);
  };

  return (
    <div className="container">
      <h1 className="text-center">Все новости </h1>
      <div className="row">
        {news.length !== 0 &&
          news.map((n) => <News newsEntity={n} key={n.id} />)}
      </div>

      <div className="row d-flex justify-content-center align-items-center my-4">
        <Pagination
          className="d-flex justify-content-center align-items-center p-0 m-0"
          style={{ maxWidth: "min-content" }}
        >
          <Pagination.First
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 0}
          />
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 0}
          />
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index === currentPage}
              onClick={() => handlePageChange(index)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages - 1}
          />
          <Pagination.Last
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages - 1}
          />
        </Pagination>
      </div>
    </div>
  );
};

export default AllNewsPage;
