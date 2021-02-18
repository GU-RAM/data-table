import React from 'react';
import { FiArrowDown, FiArrowRight } from 'react-icons/fi';

const BasicTableHeader = ({ headerGroups }) => {
  return (
    <>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>
                {column.canGroupBy ? (
                  // If the column can be grouped, let's add a toggle
                  <span
                    className='column-header-name'
                    {...column.getGroupByToggleProps()}
                  >
                    {column.isGrouped ? (
                      <FiArrowDown />
                    ) : (
                      <span>
                        <FiArrowRight />{' '}
                      </span>
                    )}
                    {column.render('Header')}
                  </span>
                ) : null}
              </th>
            ))}
          </tr>
        ))}
      </thead>
    </>
  );
};

export default BasicTableHeader;
