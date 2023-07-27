import React from "react";

// Importing the style file
import "./Rotor.css";

// Creating the Rotor component
const Rotor = React.forwardRef((props, ref) => {
  return (
    <div className="rotor-container">
      <div className="rotor-number">
        <h3>Rotor</h3>
        <input
          type="number"
          inputMode="numeric"
          ref={ref.rotor}
          min={1}
          max={5}
          defaultValue={Math.floor(Math.random() * 5) + 1}
        />
      </div>
      <div className="rotor-rotation">
        <h3>Position</h3>
        <input
          type="number"
          inputMode="numeric"
          ref={ref.rotation}
          min={1}
          max={26}
          defaultValue={Math.floor(Math.random() * 26) + 1}
        />
      </div>
    </div>
  );
});

// Exporting the Rotor component
export default Rotor;
