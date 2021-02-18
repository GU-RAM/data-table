import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import cat1 from '../../assets/images/cats-1.jpg';
import cat2 from '../../assets/images/cats-2.jpg';
import cat3 from '../../assets/images/cats-3.jpg';
import cat4 from '../../assets/images/cats-4.jpg';
import cat5 from '../../assets/images/cats-5.jpg';
import cat6 from '../../assets/images/cats-6.jpg';

const ImgCarousel = () => {
  return (
    <>
      <Carousel className='modal-carousel ' showThumbs={false}>
        <div>
          <img alt='cat' src={cat1} />
        </div>
        <div>
          <img alt='cat' src={cat2} />
        </div>
        <div>
          <img alt='cat' src={cat3} />
        </div>
        <div>
          <img alt='cat' src={cat4} />
        </div>
        <div>
          <img alt='cat' src={cat5} />
        </div>
        <div>
          <img alt='cat' src={cat6} />
        </div>
      </Carousel>
    </>
  );
};

export default ImgCarousel;
