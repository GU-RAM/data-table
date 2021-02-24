import React from 'react';

export const Checkbox = React.forwardRef(
  ({ indeterminate, setRemoveRow, setShowModal, row, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    const clickHandler = () => {
      setShowModal(true);
      setRemoveRow(row);
    };

    return (
      <div onClick={clickHandler}>
        <span ref={resolvedRef} {...rest}>
          {!row.isGrouped && 'delete'}
        </span>
      </div>
    );
  }
);
