const techList = (arrTech, name) => {
  if (arrTech.length === 0) return 'Vazio!';
  arrTech.sort();
  const newArr = arrTech.map((element) => {
    return {
      tech: element,
      name: name,
    };
  });
  return newArr;
};

module.exports = techList;
