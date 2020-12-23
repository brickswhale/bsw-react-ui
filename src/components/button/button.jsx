import React from 'react';
import './button.css';

const Button = (props) => {
  const { 
    type="default", // default, outline, ghost
    status="default", // default, primary, success, warning, danger
    size="default", // default, xs, sm, lg, xl 
    onClick=()=>{},
    className="", 

    children, 
    ...restProps 
  } = props;

  const handleOnClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <button 
      className={`bsw-button bsw-button-status-${status} bsw-button-type-${type} bsw-button-size-${size} ${className}`} 
      onClick={handleOnClick} 
      {...restProps} 
    >
      {children}
    </button>
  )
}

export default Button;