import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CopyClipboard = () => {
  const [inputVavlue, setinputVavlue] = useState();

  return (
    <div>
      <input
        value={inputVavlue}
        type='text'
        onChange={e => setinputVavlue(e.target.value)}
      />
      <CopyToClipboard text={inputVavlue}>
        <button>Copy</button>
      </CopyToClipboard>
    </div>
  );
};

export default CopyClipboard;
