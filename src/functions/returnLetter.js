// Function that will scramble the letter
export const returnLetter = (key, pos1 = 0, pos2 = 0, pos3 = 0) => {
  // Setting up the order of the letters
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const rotor1Letters = "EKMFLGDQVZNTOWYHXUSPAIBRCJ";
  const rotor2Letters = "AJDKSIRUXBLHWTMCQGZNPYFVOE";
  const rotor3Letters = "BDFHJLCPRTXVZNYEIWGAKMUSQO";
  const reflectorLetters = "EJMZALYXVBWFCRQUONTSPIKHGD";

  // Returning the current key if it is not contained in the list of letters
  if (!letters.includes(key.toUpperCase())) return key;

  // Finding the index of the key
  var index = letters.indexOf(key.toUpperCase());

  // Getting the index of the letter in the rotor3Letters list, that was located on the same index as key
  index = letters.indexOf(
    rotor3Letters[index + pos3 < 26 ? index + pos3 : index + pos3 - 25]
  );
  index = letters.indexOf(
    rotor2Letters[index + pos2 < 26 ? index + pos2 : index + pos2 - 25]
  );
  index = letters.indexOf(
    rotor1Letters[index + pos1 < 26 ? index + pos1 : index + pos1 - 25]
  );
  index = letters.indexOf(reflectorLetters[index]);
  index = reflectorLetters.indexOf(reflectorLetters[index]);
  index = rotor1Letters.indexOf(letters[index]);
  index = rotor2Letters.indexOf(
    letters[index - pos1 >= 0 ? index - pos1 : index - pos1 + 25]
  );
  index = rotor3Letters.indexOf(
    letters[index - pos2 >= 0 ? index - pos2 : index - pos2 + 25]
  );
  return letters[index - pos3 >= 0 ? index - pos3 : index - pos3 + 25];
};
