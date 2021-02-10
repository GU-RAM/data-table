import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import PopUp from '../PopUp/PopUp';

const TableBody = ({ getTableBodyProps, rows, prepareRow }) => {
  const [showModal, setShowModal] = useState(false);
  const [rowInfo, setRowInfo] = useState([]);
  return (
    <>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr
              onClick={() => {
                setRowInfo(row.original);
                setShowModal(!showModal);
              }}
              {...row.getRowProps()}
            >
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
        {showModal ? (
          <Modal>
            <PopUp rowInfo={rowInfo} setShowModal={setShowModal} />
          </Modal>
        ) : null}
      </tbody>
    </>
  );
};

export default TableBody;
