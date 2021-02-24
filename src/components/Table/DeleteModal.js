import React from 'react';

const DeleteModal = ({ setShowModal, removeRow }) => {
  const deleteHandler = () => {
    removeRow.toggleRowSelected();
    setShowModal(false);
  };

  return (
    <div className='delete-modal'>
      <h1>
        Do you want to delete{' '}
        {removeRow.groupByVal
          ? `rows grouped by country of: ${removeRow.groupByVal}`
          : `row of ${removeRow.original.first_name}`}
      </h1>
      <div>
        <button onClick={deleteHandler}>Yes</button>
        <button onClick={() => setShowModal(false)}>No</button>
      </div>
    </div>
  );
};

export default DeleteModal;
