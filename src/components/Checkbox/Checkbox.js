import React from 'react';

export const Checkbox = React.forwardRef(
  ({ indeterminate, setRemoveRow, setShowModal, row, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    const guro = () => {
      setShowModal(true);
      setRemoveRow(row);
    };

    return (
      <div onClick={guro}>
        <input type='checkbox' ref={resolvedRef} {...rest} />
      </div>
    );
  }
);
