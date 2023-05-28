import React from 'react'
import {Table} from "react-bootstrap";
import Loader from './Loader';

const MyTable = ({contentArray, goToUpdatePage, deleteById, isLoading}) => {
  return (
    <>
    {isLoading ? (
        <Loader />
      ) : (
        <Table bordered hover responsive>
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>Заглавие</th>
              <th>Фото</th>
              <th>Альт-й текст фото</th>
              <th>Редактировать</th>
              <th>Удалить</th>
            </tr>
          </thead>
          <tbody>
            {contentArray.map((content, index) => (
              <tr key={content.id}>
                <td className="text-center align-middle">{index + 1}</td>
                <td className="text-center align-middle">{content.header}</td>
                <td className="text-center align-middle">
                  <img
                    src={content.photoUrl}
                    style={{ width: "100px", height: "100px" }}
                  />
                </td>
                <td className="text-center align-middle">
                  {content.photoAltText}
                </td>
                <td className="align-middle text-center">
                  <button
                    className="btn btn-primary "
                    onClick={() => goToUpdatePage(content.id)}
                  >
                    Изменить
                  </button>
                </td>
                <td className="align-middle text-center">
                  <button
                    className="btn btn-danger"
                    //   onClick={() => deleteHomeContentById(content.id)}
                    onClick={() => deleteById(content.id)}
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default MyTable