import React from 'react';

const GroupedTableHeader = ({ headerGroups }) => {
  return (
    <>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th className='cant-group-header' {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
    </>
  );
};

export default GroupedTableHeader;
