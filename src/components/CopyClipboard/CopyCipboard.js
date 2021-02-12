import React, { useState } from 'react';
import { copyPageUrl } from '../utilities/helper';
import { AiOutlineCopy } from 'react-icons/ai';
import { TiTickOutline } from 'react-icons/ti';

const CopyCipboard = ({ children }) => {
  const [copySuccess, setCopySuccess] = useState(true);
  const [copyFails, setCopyFails] = useState(false);
  return (
    <span
      onClick={() =>
        copyPageUrl(
          children.props.children[1],
          () => setCopySuccess(false),
          () => setCopyFails()
        )
      }
      onMouseLeave={() => {
        setCopySuccess(true);
        if (copyFails) setCopyFails(false);
      }}
    >
      {copyFails ? (
        <div className='fail-color'>Capying Failed</div>
      ) : (
        React.Children.map(children, child => (
          <>
            {child} {copySuccess ? <AiOutlineCopy /> : <TiTickOutline />}
          </>
        ))
      )}
    </span>
  );
};

export default CopyCipboard;
