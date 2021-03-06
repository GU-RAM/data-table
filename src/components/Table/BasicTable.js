import React, { useMemo, useState } from 'react';
import { useTable, useGroupBy, useExpanded, usePagination } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns/columns';
import TableBody from './TableBody';
import BasicTableHeader from './BasicTableHeader';
import TableSidePage from './TableSidePage';
import './table.css';

export const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const [sideColumnActive, setSideColumnActive] = useState(false);
  const [rowInfo, setRowInfo] = useState([]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    nextPage,
    page,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    state,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useGroupBy,
    useExpanded,
    usePagination
  );

  const { pageIndex } = state;

  return (
    <div className={sideColumnActive ? 'split-page-table' : 'full-page-table'}>
      <div>
        <table {...getTableProps()}>
          <BasicTableHeader headerGroups={headerGroups} />
          <TableBody
            getTableBodyProps={getTableBodyProps}
            rows={page}
            prepareRow={prepareRow}
            setSideColumnActive={setSideColumnActive}
            setRowInfo={setRowInfo}
          />
        </table>
        <div className='table-pagination'>
          <span className='table-pagination__pageIndex'>
            Page
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>
          <div className='table-pagination__buttons'>
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {'<<'}
            </button>
            <button onClick={previousPage} disabled={!canPreviousPage}>
              Previous
            </button>
            <button onClick={nextPage} disabled={!canNextPage}>
              Next
            </button>
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {'>>'}
            </button>
          </div>
          <span className='table-pagination__goToPage'>
            | Go to page:{' '}
            <input
              type='number'
              defaultValue={pageIndex + 1}
              onChange={e => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(pageNumber);
              }}
              style={{ width: '50px' }}
            />
          </span>
        </div>
      </div>
      {sideColumnActive && (
        <div className='side-column slide-fwd-center'>
          <TableSidePage
            rowInfo={rowInfo}
            sideColumnActive={sideColumnActive}
            setSideColumnActive={setSideColumnActive}
          />
        </div>
      )}
    </div>
  );
};
