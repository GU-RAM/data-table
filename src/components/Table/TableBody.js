// import React, { useState } from 'react';
// import Modal from '../Modal/Modal';
// import PopUp from '../PopUp/PopUp';
import { FiArrowRight, FiArrowDown } from 'react-icons/fi';

const TableBody = ({
  getTableBodyProps,
  rows,
  prepareRow,
  setSideColumnActive,
  setRowInfo,
}) => {
  // const [showModal, setShowModal] = useState(false);
  // const [rowInfo, setRowInfo] = useState([]);

  const sideColumnShowHandler = (row, cell) => {
    if (row.original && cell.value) {
      setRowInfo(row.original);
      // setShowModal(!showModal);
      setSideColumnActive(true);
    }
  };

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
                    onClick={() => sideColumnShowHandler(row, cell)}
                    {...cell.getCellProps()}
                    style={{
                      background: cell.isGrouped
                        ? '#d4ffaa'
                        : cell.isAggregated
                        ? '#e1eaaa'
                        : cell.isPlaceholder
                        ? '#ffecaa'
                        : 'white',
                    }}
                  >
                    {cell.isGrouped ? (
                      // If it's a grouped cell, add an expander and row count
                      <>
                        <span {...row.getToggleRowExpandedProps()}>
                          {row.isExpanded ? <FiArrowDown /> : <FiArrowRight />}
                          {cell.render('Cell')} ({row.subRows.length})
                        </span>{' '}
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
        {/* {showModal ? (
          <Modal>
            <PopUp rowInfo={rowInfo} setShowModal={setShowModal} />
          </Modal>
        ) : null} */}
      </tbody>
    </>
  );
};

export default TableBody;
