import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MinimalClinicCard from "../components/MinimalClinicCard";
import WorkService from "../service/clinic_work";

const ClientServicePage = () => {
  const { id } = useParams();
  const [clinics, setClinics] = useState([]);
  const [service, setService] = useState();

  useEffect(() => {
    getClinicsByWorkId(id);
  }, []);

  useEffect(() => {
    getClinicsByWorkId(id)
  }, [id])

  const getClinicsByWorkId = (id) => {
    WorkService.getClinicsOfWorkById(id)
      .then((res) => {
        setClinics(res.data.clinics);
        setService(res.data.name);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="container">
      {clinics.length !== 0 && (
        <div className="container">
          <h2 className="text-center">Центры, предлагающие услугу: <i className="text-danger">{service}</i></h2>
          {clinics.map((clinic) => (
            <MinimalClinicCard key={clinic.id} clinic={clinic} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ClientServicePage;
