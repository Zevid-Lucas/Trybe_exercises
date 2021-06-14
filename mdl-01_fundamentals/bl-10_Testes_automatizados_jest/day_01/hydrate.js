const hydrate = (str) => {
  const glassWater = Array.from(str).reduce((acc, letter) => {
    let notLetter = parseInt(letter);
    let checkNotLetter = /\D/g.test(notLetter);
    if (!checkNotLetter) return acc + notLetter;
    return acc;
  }, 0);
  const glassOrGlasses = glassWater === 1 ? 'copo' : 'copos';
  return `${glassWater} ${glassOrGlasses} de água`;
};

console.log(hydrate('1 cerveja'));

module.exports = hydrate;
