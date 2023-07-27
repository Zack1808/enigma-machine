// Function that will scramble the letter
export const encript = (key, rotor1, rotor2, rotor3, pos1, pos2, pos3) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const rotors = [
    "EKMFLGDQVZNTOWYHXUSPAIBRCJ",
    "AJDKSIRUXBLHWTMCQGZNPYFVOE",
    "BDFHJLCPRTXVZNYEIWGAKMUSQO",
    "ESOVPZJAYQUIRHXLNFTGKDCMWB",
    "VZBRGITYUPSDNHLXAWMJQOFECK",
  ];
  const reflectorLetters = "EJMZALYXVBWFCRQUONTSPIKHGD";
  if (!letters.includes(key.toUpperCase())) return key;
  var index = letters.indexOf(key.toUpperCase());
  index = letters.indexOf(
    rotors[rotor1][index + pos1 <= 25 ? index + pos1 : index + pos1 - 26]
  );
  index = letters.indexOf(
    rotors[rotor2][index + pos2 <= 25 ? index + pos2 : index + pos2 - 26]
  );
  index = letters.indexOf(
    rotors[rotor3][index + pos3 <= 25 ? index + pos3 : index + pos3 - 26]
  );
  index = letters.indexOf(reflectorLetters[index]);
  index = reflectorLetters.indexOf(reflectorLetters[index]);
  index = rotors[rotor3].indexOf(letters[index]);
  index = rotors[rotor2].indexOf(
    letters[index - pos3 >= 0 ? index - pos3 : index - pos3 + 26]
  );
  index = rotors[rotor1].indexOf(
    letters[index - pos2 >= 0 ? index - pos2 : index - pos2 + 26]
  );
  if (key === key.toUpperCase())
    return letters[index - pos1 >= 0 ? index - pos1 : index - pos1 + 26];
  return letters[
    index - pos1 >= 0 ? index - pos1 : index - pos1 + 26
  ].toLowerCase();
};
