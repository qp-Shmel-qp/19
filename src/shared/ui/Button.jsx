import React from 'react';

const Button = ({ onClick, children, disabled }) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
