import React from 'react';
import ImgCarousel from '../ImgCarousel/ImgCarousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PopUp = ({ rowInfo, setShowModal }) => {
  const { id, first_name, last_name, date_of_birth, country, phone } = rowInfo;
  return (
    <div className='PopUp'>
      <div className='PopUp-header'>
        <h2>User Information</h2>
        <div onClick={() => setShowModal(false)}>X</div>
      </div>
      <ol>
        <li>
          <strong>ID: </strong>
          {id}
        </li>
        <li>
          <strong>First Name: </strong>
          {first_name}
        </li>
        <li>
          <strong>Last Name: </strong>
          {last_name}
        </li>
        <li>
          <strong>Date of Birth: </strong>
          {date_of_birth}
        </li>
        <li>
          <strong>Country: </strong>
          {country}
        </li>
        <li>
          <strong>Phone: </strong>
          {phone}
        </li>
      </ol>
      <ImgCarousel />
    </div>
  );
};

export default PopUp;
