import React from 'react';
import ImgCarousel from '../ImgCarousel/ImgCarousel';
import CopyCipboard from '../CopyClipboard/CopyCipboard';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PopUp = ({ rowInfo, setShowModal }) => {
  const { id, first_name, last_name, date_of_birth, country, phone } = rowInfo;
  return (
    <div className='PopUp'>
      <div className='PopUp-header'>
        <h2>User Information</h2>
        <div onClick={() => setShowModal(false)}>X</div>
      </div>
      <ol className='PopUp-clipboard-list'>
        {Object.keys({
          id,
          first_name,
          last_name,
          date_of_birth,
          country,
          phone,
        }).map((item, index, ar) => {
          return (
            <CopyCipboard>
              <li>
                <strong>{item.replace(/_/g, ' ')}: </strong>
                {rowInfo[item]}
              </li>
            </CopyCipboard>
          );
        })}
      </ol>

      <ImgCarousel />
    </div>
  );
};

export default PopUp;
