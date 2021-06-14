const sum = require('./sum');

describe('Verifica a soma de a + b da função sum', () => {
  it('Verifica se 4 + 5 é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('Verifica se 0 + 0 é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('Verifica se lança o um erro quando os parâmetros são diferentes de number', () => {
    expect(() => sum(4, '5')).toThrow();
  });
  it('Verifica se a mensagem de erro é "parameters must be numbers"', () => {
    expect(() => sum(4, '5')).toThrowError(new Error('parameters must be numbers'));
  });
});
