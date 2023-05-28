import React from 'react'
import {Table} from "react-bootstrap";
import Loader from './Loader';

const MyAppealTable = ({contentArray, deleteById, isLoading}) => {
  return (
    <>
    {isLoading ? (
        <Loader />
      ) : (
        <Table bordered hover responsive>
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>Имя</th>
              <th>Сообщение</th>
              <th>Тел.номер</th>
              <th>Удалить</th>
            </tr>
          </thead>
          <tbody>
            {contentArray.map((content, index) => (
              <tr key={content.id}>
                <td className="text-center align-middle">{index + 1}</td>
                <td className="text-center align-middle">{content.name}</td>
                <td className="text-center align-middle">{content.text}</td>
                <td className="text-center align-middle">{content.phone}</td>
        
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

export default MyAppealTable