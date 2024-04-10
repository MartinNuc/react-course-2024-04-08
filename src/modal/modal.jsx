import { createPortal } from 'react-dom';

export function Modal({ children }) {
  return (
    <>
      {createPortal(
        <div
          style={{
            background: 'white',
            border: '1px solid black',
            padding: '10px',
            position: 'absolute',
            top: '50%',
            left: '40%',
            width: '20%'
          }}
        >
          {children}
        </div>,
        document.body
      )}
    </>
  );
}
