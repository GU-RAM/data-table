import React from 'react';
import Copy from './Copy';
import Paste from './Paste';

const CopyAsync = () => {
  return (
    <div className='clipboard-wrapper'>
      <Copy />
      <Paste />
    </div>
  );
};

export default CopyAsync;
