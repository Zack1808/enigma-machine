import React from "react";

// Importing the style file
import "./Textarea.css";

// Creating the Textarea component
const Textarea = React.forwardRef(({ input, value }, ref) => {
  if (input) return <textarea ref={ref}></textarea>;
  return <textarea value={value} disabled></textarea>;
});

// Exporting the Textarea component
export default Textarea;
