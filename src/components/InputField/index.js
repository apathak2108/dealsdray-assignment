import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputField = ({
  value,
  label,
  name,
  type,
  placeholder,
  id,
  className,
  onChange,
  maxLength,
  accept,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value);
  };

  return (
    <div style={{ position: "relative" }}>
      <input
        id={id}
        className={className}
        label={label}
        type={showPassword ? "text" : type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        maxLength={maxLength}
        accept={accept}
        required
      />
      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          style={{
            position: "absolute",
            right: "10px",
            top: "70%",
            transform: "translateY(-50%)",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            color: "gray",
          }}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      )}
    </div>
  );
};

export default InputField;
