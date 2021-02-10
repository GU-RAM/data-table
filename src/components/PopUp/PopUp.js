import React from 'react';

const PopUp = ({ rowInfo }) => {
  const { id, first_name, last_name, date_of_birth, country, phone } = rowInfo;
  return (
    <div>
      <ol>
        <li>
          <strong>ID</strong>
          {id}
        </li>
        <li>
          <strong>First Name</strong>
          {first_name}
        </li>
        <li>
          <strong>Last Name</strong>
          {last_name}
        </li>
        <li>
          <strong>Date of Birth</strong>
          {date_of_birth}
        </li>
        <li>
          <strong>Country</strong>
          {country}
        </li>
        <li>
          <strong>Phone</strong>
          {phone}
        </li>
      </ol>
    </div>
  );
};

export default PopUp;
