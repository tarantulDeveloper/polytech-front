import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import ClinicService from "../service/clinic";
import MyPuffLoader from "../components/PuffLoader";
import ClinicCard from "../components/ClinicCard";
import { Pagination } from "react-bootstrap";

const ClinicClientPage = () => {
  const { oblast } = useParams();
  const [currentPage, setCurrentPage] = useState(0); // Set initial page to 0
  const [totalPages, setTotalPages] = useState(0);
  const [clinics, setClinics] = useState([]);
  const pageSize = 3;


  useEffect(() => {
    getClinicsByOblast(0, pageSize, oblast);
  }, []);

  useEffect(() => {
    getClinicsByOblast(0, pageSize, oblast);
  }, [oblast]);

  const getClinicsByOblast = (pageNo, pageSize, oblast) => {
    ClinicService.getClinicsByOblast(pageNo, pageSize, oblast)
      .then((res) => {
        const { content, totalPages, number } = res.data;
        setClinics(content);
        setTotalPages(totalPages);
        setCurrentPage(number);
      })
      .catch((e) => console.error(e))
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    getClinicsByOblast(page, pageSize, oblast);
  };


  return (
    <div className="container">
      <h1 className="text-center">Реабилитационные центры {oblast} </h1>
      {clinics.length !== 0 && (
        <>
          {clinics.map((clinic) => (
            <ClinicCard key={clinic.id} clinic={clinic} />
          ))}
        </>
      )}
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

export default ClinicClientPage;
