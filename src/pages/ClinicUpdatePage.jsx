import React, { useEffect, useState } from "react";
import MyClinicInput from "../components/MyClinicInput";
import { useParams, useNavigate } from "react-router-dom";
import ClinicService from "../service/clinic";
import ClinicWorksService from "../service/clinic_work";

const ClinicUpdatePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [clinic, setClinic] = useState({
    header: "",
    text: "",
    photoAltText: "",
    phone: "",
    workTime: "",
    oblast: "",
    workDays: "",
    address: "",
    photo: null,
    photoUrl: "",
    webSiteUrl: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedWeekdays, setSelectedWeekdays] = useState([]);
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

  useEffect(() => {
    getClinicById(id);
    getServices();
  }, []);

  const getClinicById = (id) => {
    setIsLoading(true);
    ClinicService.getClinicById(id)
      .then((res) => {
        setClinic(res.data);
        setSelectedValue(res.data.oblast);
        setSelectedServices(res.data.clinicWorks);
        setSelectedWeekdays(res.data.workDays.split(", "));
      })
      .catch((e) => console.error(e))
      .finally((_) => {
        setIsLoading(false);
      });
  };

  const getServices = () => {
    setIsLoading(true);
    ClinicWorksService.getAllServices()
      .then((res) => setServices(res.data))
      .catch((e) => console.error(e))
      .finally(() => setIsLoading(false));
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedWeekdays([...selectedWeekdays, value]);
    } else {
      setSelectedWeekdays(selectedWeekdays.filter((day) => day !== value));
    }
  };
  const handleSelectedCheck = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      const selectedService = services.find((service) => service.id === Number(value));
      setSelectedServices((prevSelectedServices) => [
        ...prevSelectedServices,
        selectedService,
      ]);
    } else {
      setSelectedServices((prevSelectedServices) =>
        prevSelectedServices.filter((service) => service.id !== Number(value))
      );
    }
     
  };

  const handleTextChange = (e) => {
    const value = e.target.value;
    setClinic({ ...clinic, [e.target.name]: value });
  };

  const handleFileChange = (e) => {
    setClinic({ ...clinic, photo: e.target.files[0] });
  };

  const navigateBack = () => {
    navigate("/clinics");
  };

  const handleSubmit = (e) => {

    const data = new FormData();
    data.append("header", clinic.header);
    data.append("text", clinic.text);
    data.append("photoAltText", clinic.photoAltText);
    data.append("phone", clinic.phone);
    data.append("workTime", clinic.workTime);
    data.append("oblast", selectedValue);
    data.append("address", clinic.address);
    data.append("webSiteUrl", clinic.webSiteUrl);
    data.append("workDays", selectedWeekdays.join(", "));

    const tempArray = [];
  
    for (let i = 0; i < selectedServices.length; i++) {
      tempArray.push(selectedServices[i].id);
    };

    data.append("worksIds", tempArray)
   
    if (typeof clinic.photo !== "undefined") {
      data.append("photo", clinic.photo);
    }

    setIsLoading(true);

    ClinicService.updateClinic(id, data)
      .catch((e) => console.error(e))
      .finally((_) => {
        setIsLoading(false);
        navigate("/clinics");
      });
  };
  return (
    <div className="container">
      <h2 className="text-center">Изменить Клинику</h2>
      <MyClinicInput
        isLoading={isLoading}
        content={clinic}
        handleTextChange={handleTextChange}
        handleFileChange={handleFileChange}
        handleSubmit={handleSubmit}
        navigateBack={navigateBack}
        selectedValue={selectedValue}
        handleSelectChange={handleSelectChange}
        selectedWeekdays={selectedWeekdays}
        handleCheckboxChange={handleCheckboxChange}
        selectedServices={selectedServices}
        handleSelectedCheck={handleSelectedCheck}
        services={services}
      />
    </div>
  );
};

export default ClinicUpdatePage;
