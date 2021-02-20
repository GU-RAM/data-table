import React from 'react';

const WarningModal = ({ setShowModal, removeRow }) => {
  return (
    <div>
      <h1>Do you want to delete</h1>
      <button
        onClick={(() => removeRow.toggleRowSelected(), setShowModal(false))}
      >
        Yes
      </button>
      <button onClick={() => setShowModal(false)}>No</button>
    </div>
  );
};

export default WarningModal;
