// Function that will scramble the letter
export const returnLetter = (key, pos1 = 24, pos2 = 24, pos3 = 24) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const rotor1Letters = "EKMFLGDQVZNTOWYHXUSPAIBRCJ";
  const rotor2Letters = "AJDKSIRUXBLHWTMCQGZNPYFVOE";
  const rotor3Letters = "BDFHJLCPRTXVZNYEIWGAKMUSQO";
  const reflectorLetters = "EJMZALYXVBWFCRQUONTSPIKHGD";
  const rotor1 = [
    4, 10, 12, 5, 11, 6, 3, 16, 21, 25, 13, 19, 14, 22, 24, 7, 23, 20, 18, 15,
    0, 8, 1, 17, 2, 9,
  ];
  const rotor2 = [
    0, 9, 3, 10, 18, 8, 17, 20, 23, 1, 11, 7, 22, 19, 12, 2, 16, 6, 25, 13, 15,
    24, 5, 21, 14, 4,
  ];
  const rotor3 = [
    1, 3, 5, 7, 9, 11, 2, 15, 17, 19, 23, 21, 25, 13, 24, 4, 8, 22, 6, 0, 10,
    12, 20, 18, 16, 14,
  ];
  const reflector = [
    4, 9, 12, 25, 0, 11, 24, 23, 21, 1, 22, 5, 2, 17, 16, 20, 14, 13, 19, 18,
    15, 8, 10, 7, 6, 3,
  ];
  if (!letters.includes(key.toUpperCase())) return key;
  var index = letters.indexOf(key.toUpperCase());
  index = rotor3[index + pos3 < 26 ? index + pos3 : index + pos3 - 25];
  index = rotor2[index + pos2 < 26 ? index + pos2 : index + pos2 - 25];
  index = rotor1[index + pos1 < 26 ? index + pos1 : index + pos1 - 25];
  index = reflector[index];
  index = reflectorLetters.indexOf(reflectorLetters[index]);
  index = rotor1Letters.indexOf(letters[index]);
  index = rotor2Letters.indexOf(
    letters[index - pos1 >= 0 ? index - pos1 : index - pos1 + 25]
  );
  index = rotor3Letters.indexOf(
    letters[index - pos2 >= 0 ? index - pos2 : index - pos2 + 25]
  );
  console.log(letters[index - pos3 >= 0 ? index - pos3 : index - pos3 + 25]);
};
