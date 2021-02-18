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
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    onClick={() => {
                      if (row.original && cell.value) {
                        setRowInfo(row.original);
                        setShowModal(!showModal);
                      }
                    }}
                    {...cell.getCellProps()}
                  >
                    {cell.isGrouped ? (
                      // If it's a grouped cell, add an expander and row count
                      <>
                        <span {...row.getToggleRowExpandedProps()}>
                          {row.isExpanded ? '👇' : '👉'}
                        </span>{' '}
                        {cell.render('Cell')} ({row.subRows.length})
                      </>
                    ) : cell.isAggregated ? (
                      // If the cell is aggregated, use the Aggregated
                      // renderer for cell
                      cell.render('Aggregated')
                    ) : cell.isPlaceholder ? null : ( // For cells with repeated values, render null
                      // Otherwise, just render the regular cell
                      cell.render('Cell')
                    )}
                  </td>
                );
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
