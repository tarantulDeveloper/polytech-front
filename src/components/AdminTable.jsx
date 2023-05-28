import React, { useEffect } from "react";
import Loader from "./Loader";
import {Table} from "react-bootstrap";

const AdminTable = ({contentArray, isLoading}) => {


  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Table bordered hover responsive >
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>username</th>
              <th>Фото</th>
              <th>Имя</th>
              <th>Фамилия</th>
              <th>Роль</th>
            </tr>
          </thead>
          <tbody>
            {contentArray.map((content, index) => (
              <tr key={content.id}>
                <td className="text-center align-middle">{index + 1}</td>
                <td className="text-center align-middle">{content.username}</td>
                <td className="text-center align-middle">
                  <img
                    src={content.photoUrl}
                    style={{ width: "100px", height: "100px" }}
                  />
                </td>
                
                <td className="text-center align-middle">
                    {content.firstName}
                </td>
                <td className="text-center align-middle">
                    {content.lastName}
                </td>
                <td className="text-center align-middle">
                    {content.roles[0]}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default AdminTable;
