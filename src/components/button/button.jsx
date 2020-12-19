import React from 'react';
import './button.css';

const Button = (props) => {
  const { children, onClick, type="default", size="default", ...restProps } = props;

  const handleOnClick = () => {
    onClick()
  }

  return <button className={`bsw-button bsw-button-type-${type} bsw-button-size-${size}`} onClick={handleOnClick} {...restProps} >{children}</button>
}

export default Button;