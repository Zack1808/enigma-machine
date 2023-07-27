import React from "react";

// Importign the style file
import "./Button.css";

// Creating the Button component
const Button = ({ type = "button", label }) => {
  return <button type={type}>{label}</button>;
};

// Exporting the Button component
export default Button;
