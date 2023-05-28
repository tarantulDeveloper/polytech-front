import React, { useState, useEffect } from "react";
import AppealService from "../service/appeal_service";
import MyAppealTable from "../components/MyAppealTable";

const AppealPage = () => {
  const [appeals, setAppeals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAll();
  }, []);

  const getAll = () => {
    setLoading(true);
    AppealService.getAll()
      .then((response) => {
        setAppeals(response.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  const deletById = (id) => {
    AppealService.deleteById(id)
      .catch((err) => console.error(err))
      .finally((_) => getAll());
  };

  return (
    <div className="container">
      <div className="row text-center">
        <h2>
          Страница{" "}
          <i>
            <b>Сообщений</b>
          </i>
        </h2>
      </div>
      <MyAppealTable
        contentArray={appeals}
        deleteById={deletById}
        isLoading={loading}
      />
    </div>
  );
};

export default AppealPage;
