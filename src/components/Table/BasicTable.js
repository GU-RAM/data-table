import React, { useMemo } from 'react';
import { useTable, useGroupBy, useExpanded, useRowSelect } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns/columns';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import { Checkbox } from '../../components/Checkbox/Checkbox';
// import Modal from '../Modal/Modal';
import './table.css';

export const BasicTable = () => {
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
      columns,
      data,
    },
    useGroupBy,
    useExpanded,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        ...columns,
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
        },
      ]);
    }
  );

  const chooseData = rows.filter(dat => !dat.isSelected);

  return (
    <>
      <table {...getTableProps()}>
        <TableHeader headerGroups={headerGroups} />
        <TableBody
          getTableBodyProps={getTableBodyProps}
          rows={chooseData}
          prepareRow={prepareRow}
        />
      </table>
    </>
  );
};
