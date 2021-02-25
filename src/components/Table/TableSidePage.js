import React from 'react';

const TableSidePage = ({ rowInfo, setSideColumnActive }) => {
  const { id, first_name, last_name, country, date_of_birth, phone } = rowInfo;
  return (
    <>
      <div className='side-column-header'>
        <h2>User Information</h2>
        <div onClick={() => setSideColumnActive(false)}>X</div>
      </div>
      <ul>
        <li>id: {id}</li>
        <li>First Name: {first_name}</li>
        <li>Last Name: {last_name}</li>
        <li>Country: {country}</li>
        <li>Birthday: {date_of_birth}</li>
        <li>Phone: {phone}</li>
      </ul>
      <div className='side-column-footer'>
        <button>ACCEPT</button>
        <button>REJECT</button>
      </div>
    </>
  );
};

export default TableSidePage;
