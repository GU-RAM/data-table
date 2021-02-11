import React, { useState } from 'react';

const Paste = () => {
  const [textToPaste, settextToPaste] = useState();

  async function getClipboardContents() {
    try {
      const copiedText = await navigator.clipboard.readText();
      return settextToPaste(copiedText);
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
    }
  }

  return (
    <div>
      <button onClick={() => getClipboardContents()}>Paste</button>
      <input type='text' value={textToPaste} />
    </div>
  );
};

export default Paste;
