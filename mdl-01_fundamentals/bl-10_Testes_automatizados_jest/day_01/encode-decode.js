const encode = (str) => {
  const arrVogals = ['a', 'e', 'i', 'o', 'u'];
  const arrNumbers = [1, 2, 3, 4, 5];
  const code = Array.from(str).map((letter) => {
    if (arrVogals.includes(letter)) {
      return arrNumbers[arrVogals.indexOf(letter)];
    }
    return letter;
  });
  return code.join('');
};

const decode = (str) => {
  const arrVogals = ['a', 'e', 'i', 'o', 'u'];
  const arrNumbers = ['1', '2', '3', '4', '5'];
  const decode = Array.from(str).map((letter) => {
    if (arrNumbers.includes(letter)) {
      return arrVogals[arrNumbers.indexOf(letter)];
    }
    return letter;
  });
  return decode.join('');
};

const functions = { encode, decode };
module.exports = functions;
