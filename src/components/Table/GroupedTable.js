import React, { useMemo, useState } from 'react';
import {
  useTable,
  useGroupBy,
  useExpanded,
  useRowSelect,
  usePagination,
} from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns/columns';
import TableBody from './TableBody';
import GroupedTableHeader from './GroupedTableHeader';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import Modal from '../Modal/Modal';
import DeleteModal from './DeleteModal';
import './table.css';

const GroupedTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [removeRow, setRemoveRow] = useState(null);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      initialState: { groupBy: ['country'] },
      columns,
      data,
    },
    useGroupBy,
    useExpanded,
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        ...columns,
        {
          id: 'selection',
          // Header: ({ getToggleAllRowsSelectedProps }) => (
          //   <Checkbox {...getToggleAllRowsSelectedProps()} />
          // ),
          Cell: ({ row }) => (
            <Checkbox
              {...row.getToggleRowSelectedProps()}
              setRemoveRow={setRemoveRow}
              setShowModal={setShowModal}
              row={row}
            />
          ),
        },
      ]);
    }
  );

  const chooseData = rows.filter(dat => !dat.isSelected);

  return (
    <>
      <table {...getTableProps()}>
        <GroupedTableHeader headerGroups={headerGroups} />
        <TableBody
          getTableBodyProps={getTableBodyProps}
          rows={chooseData}
          prepareRow={prepareRow}
        />
      </table>
      {showModal ? (
        <Modal>
          <DeleteModal removeRow={removeRow} setShowModal={setShowModal} />
        </Modal>
      ) : null}
    </>
  );
};

export default GroupedTable;
