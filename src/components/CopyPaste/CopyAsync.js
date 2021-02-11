import React, { useState } from 'react';

const Copy = () => {
  const [inputValue, setinputVavlue] = useState();

  async function copyPageUrl(inputValue) {
    try {
      await navigator.clipboard.writeText(inputValue);
      console.log('Page URL copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  return (
    <div>
      <button onClick={() => copyPageUrl(inputValue)}>Copy</button>
      <input
        type='text'
        onChange={e => setinputVavlue(e.target.value)}
        value={inputValue}
      />
    </div>
  );
};

export default Copy;
