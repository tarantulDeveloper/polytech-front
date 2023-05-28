import React from "react";

const OblastSelect = ({ selectedValue, handleSelectChange }) => {
  return (
    <div>
        <label htmlFor="oblast" className="form-label">Области</label>
      <select
        value={selectedValue}
        onChange={handleSelectChange}
        className="form-select"
        aria-label="Выбрать из областей"
        id="oblast"
      >
        <option value="Бишкек">Бишкек</option>
        <option value="Чуй">Чуй</option>
        <option value="Ош_город">город Ош</option>
        <option value="Ош_обл">Ошская область</option>
        <option value="Иссык-Куль">Иссык-Куль</option>
        <option value="Нарын">Нарын</option>
        <option value="Талас">Талас</option>
        <option value="Баткен">Баткен</option>
        <option value="Джалал-Абад">Джалал-Абад</option>

      </select>
    </div>
  );
};

export default OblastSelect;
