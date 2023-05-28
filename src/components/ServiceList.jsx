import React, { useEffect } from "react";

const ServiceList = ({ selectedServices, handleCheckboxChange, services }) => {
  
  
  return (
    <div className="row">
      <h4>Услуги:</h4>
      {services.length !== 0 && (
        <>
          {services.map((service) => (
            <label key={service.id}>
              <input
                type="checkbox"
                value={service.id}
                checked={selectedServices.some(
                  (selected) => selected.id === service.id
                )}
                onChange={handleCheckboxChange}
              />
              {service.name}
            </label>
          ))}
        </>
      )}
      <p>Выбранные услуги:</p>
      {selectedServices.map((selected) => (
        <h6 key={selected.id}>{selected.name}</h6>
      ))}
    </div>
  );
};

export default ServiceList;
