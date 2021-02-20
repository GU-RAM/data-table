import React from 'react';
import ImgCarousel from '../ImgCarousel/ImgCarousel';
import CopyClipboard from '../CopyClipboard/CopyClipboard';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PopUp = ({ rowInfo, setShowModal }) => {
  return (
    <div className='PopUp'>
      <div className='PopUp-header'>
        <h2>User Information</h2>
        <div onClick={() => setShowModal(false)}>X</div>
      </div>
      <ol className='PopUp-clipboard-list'>
        {Object.entries(rowInfo).map(([key, value]) => {
          return (
            <CopyClipboard key={key} text={value}>
              <li>
                <strong>{key.replace(/_/g, ' ')}: </strong>
                {value}
              </li>
            </CopyClipboard>
          );
        })}
      </ol>

      <ImgCarousel />
    </div>
  );
};

export default PopUp;
