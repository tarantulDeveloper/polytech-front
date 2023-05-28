import React from "react";

const WeekDays = ({ selectedWeekdays, handleCheckboxChange }) => {
  return (
    <div className="row">
      <label htmlFor="weekdays" className="form-label">
        Дни недели
      </label>

      <label>
        <input
          type="checkbox"
          value="Понедельник"
          checked={selectedWeekdays.includes("Понедельник")}
          onChange={handleCheckboxChange}
        />
        Понедельник
      </label>
      <label>
        <input
          type="checkbox"
          value="Вторник"
          checked={selectedWeekdays.includes("Вторник")}
          onChange={handleCheckboxChange}
        />
        Вторник
      </label>
      <label>
        <input
          type="checkbox"
          value="Среда"
          checked={selectedWeekdays.includes("Среда")}
          onChange={handleCheckboxChange}
        />
        Среда
      </label>
      <label>
        <input
          type="checkbox"
          value="Четверг"
          checked={selectedWeekdays.includes("Четверг")}
          onChange={handleCheckboxChange}
        />
        Четверг
      </label>
      <label>
        <input
          type="checkbox"
          value="Пятница"
          checked={selectedWeekdays.includes("Пятница")}
          onChange={handleCheckboxChange}
        />
        Пятница
      </label>
      <label>
        <input
          type="checkbox"
          value="Суббота"
          checked={selectedWeekdays.includes("Суббота")}
          onChange={handleCheckboxChange}
        />
        Суббота
      </label>
      <label>
        <input
          type="checkbox"
          value="Воскресенье"
          checked={selectedWeekdays.includes("Воскресенье")}
          onChange={handleCheckboxChange}
        />
        Воскресенье
      </label>
      <p>Выбранные дни: {selectedWeekdays.join(", ")}</p>
    </div>
  );
};

export default WeekDays;
