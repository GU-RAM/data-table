import React from 'react';
import Copy from './CopyAsync';
import Paste from './PasteAsync';

const CopyAsync = () => {
  return (
    <div className='clipboard-wrapper'>
      <Copy />
      <Paste />
    </div>
  );
};

export default CopyAsync;
