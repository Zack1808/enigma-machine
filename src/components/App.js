import React, { useRef } from "react";

// Importing costume components
import Rotor from "./Rotor/Rotor";

// Importing the functions
import { encript } from "../functions/returnLetter";

// Importing the style file
import "./App.css";

// Creating the App component
const App = () => {
  // Setting up the refs
  const rotor1 = useRef();
  const rotor2 = useRef();
  const rotor3 = useRef();
  const rotation1 = useRef();
  const rotation2 = useRef();
  const rotation3 = useRef();
  const textfield = useRef();

  // Setting up variables
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Function that will call the encription
  const handleSubmit = (e) => {
    e.preventDefault();
    var rot1 = rotation1.current?.value - 1;
    var rot2 = rotation2.current?.value - 1;
    var rot3 = rotation3.current?.value - 1;
    var encription = "";
    for (let i = 0; i < textfield.current?.value.length; i++) {
      encription += encript(
        textfield.current?.value[i],
        rotor1.current?.value - 1,
        rotor2.current?.value - 1,
        rotor3.current?.value - 1,
        rot1,
        rot2,
        rot3
      );
      if (!letters.includes(textfield.current?.value[i].toUpperCase()))
        continue;
      rot1++;
      if (rot1 === 26) {
        rot2++;
        rot1 = 0;
        if (rot2 === 26) {
          rot3++;
          rot2 = 0;
          if (rot3 === 26) {
            rot3 = 0;
          }
        }
      }
    }
    console.log(encription);
  };

  return (
    <form className="app-container" onSubmit={handleSubmit}>
      <h1>Encode me</h1>
      <div className="rotors">
        <Rotor ref={{ rotor: rotor3, rotation: rotation3 }} />
        <Rotor ref={{ rotor: rotor2, rotation: rotation2 }} />
        <Rotor ref={{ rotor: rotor1, rotation: rotation1 }} />
      </div>
      <input type="text" ref={textfield} />
      <button>submit</button>
    </form>
  );
};

// Exporting the App component
export default App;
