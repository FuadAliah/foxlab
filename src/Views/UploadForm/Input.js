import React from "react";
import "./Input.scss";

const Input = ({ type, id, name, placeholder, label, value, handlechange, focus, blur }) => {
  const classes = `input-${id}`;

  return (
    <div className={classes}>
      <label htmlFor={id}>
        {label} <small className="ms-2 text-secondary">Required</small>
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onFocus={id === "website_url" ? focus : null}
        onBlur={id === "website_url" ? blur : null}
        onChange={handlechange}
        required
        autoComplete="off"
      />
      <span className="counter">{id === "name" ? "30" : id === "tagline" ? "50" : null}</span>
    </div>
  );
};

export default Input;
