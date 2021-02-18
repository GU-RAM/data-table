import React, { useMemo } from 'react';
import { useTable, useGroupBy, useExpanded } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns/columns';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import './table.css';

const GroupedTable = () => {
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
      disableGroupBy: true,
      columns,
      data,
    },
    useGroupBy,
    useExpanded
  );

  return (
    <>
      <table {...getTableProps()}>
        <TableHeader headerGroups={headerGroups} />
        <TableBody
          getTableBodyProps={getTableBodyProps}
          rows={rows}
          prepareRow={prepareRow}
        />
      </table>
    </>
  );
};

export default GroupedTable;
