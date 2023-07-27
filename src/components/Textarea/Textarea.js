import React from "react";

// Importing the style file
import "./Textarea.css";

// Creating the Textarea component
const Textarea = React.forwardRef(({ input, value, label }, ref) => {
  if (input) return <textarea ref={ref} placeholder={label}></textarea>;
  return <textarea value={value} placeholder={label} disabled></textarea>;
});

// Exporting the Textarea component
export default Textarea;
