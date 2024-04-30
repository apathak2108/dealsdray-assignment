import React from "react";

const Button = ({ name, className, onClick, type }) => {
  return (
    <div>
      <button
        className={`button-component ${className}`}
        onClick={onClick}
        type={type}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
