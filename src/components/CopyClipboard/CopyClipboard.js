import React, { useState } from 'react';
import { copyPageUrl } from '../utilities/helper';
import {
  STATUS_DATA_INITIAL,
  // STATUS_DATA_FAILED,
  STATUS_DATA_ACTIVE,
  // STATUS_DATA_SUCCESS,
} from '../constants/status';
import { AiOutlineCopy } from 'react-icons/ai';
import { TiTickOutline } from 'react-icons/ti';

const CopyClipboard = ({ text, children }) => {
  const [copyStatus, setCopyStatus] = useState(STATUS_DATA_INITIAL);
  return (
    <span
      onClick={() =>
        copyPageUrl(text, status => {
          setCopyStatus(status);
        })
      }
      onMouseLeave={() => {
        setCopyStatus(STATUS_DATA_INITIAL);
      }}
      onMouseEnter={() => {
        setCopyStatus(STATUS_DATA_ACTIVE);
      }}
    >
      {children}
      {copyStatus === 'FAILED' && (
        <div className='fail-color'>Copying Failed</div>
      )}
      {copyStatus === 'ACTIVE' && <AiOutlineCopy />}
      {copyStatus === 'SUCCESS' && <TiTickOutline />}
    </span>
  );
};

export default CopyClipboard;
