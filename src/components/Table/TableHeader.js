import React from 'react';

const TableHeader = ({ headerGroups }) => {
  return (
    <>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>
                {column.canGroupBy ? (
                  // If the column can be grouped, let's add a toggle
                  <span {...column.getGroupByToggleProps()}>
                    {column.isGrouped ? '🛑 ' : '👊 '}
                  </span>
                ) : null}
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
    </>
  );
};

export default TableHeader;
