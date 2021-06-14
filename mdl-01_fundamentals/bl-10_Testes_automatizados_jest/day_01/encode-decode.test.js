const { encode, decode } = require('./encode-decode.js');

describe('Verifica as funções encode e decode', () => {
  it('Verifica se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  it('Testa se encode e decode é definida', () => {
    expect(encode).toBeDefined();
    expect(decode).toBeDefined();
  });
  it('Testa se encode converte as vogais a,e,i,o,u em 1,2,3,4,5, respectivamente', () => {
    expect(encode('aeiou')).toBe('12345');
  });
  it('Testa se decode converte os números 1,2,3,4,5 em vogais a,e,i,o,u, respectivamente', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  it('Testa se encode converte a palavrea xablau em x1bl15', () => {
    expect(encode('xablau')).toBe('x1bl15');
  });
  it('Testa se decode converte x1bl15 em xablau', () => {
    expect(decode('x1bl15')).toBe('xablau');
  });
  it('Verifica se a string retornada de encode tem mesma quantidade de caracteres que o argumento passado', () => {
    expect(encode('xablau').length).toBe(6);
  });
  it('Verifica se a string retornada de decode tem a mesma quantidade de caracteres que o argumento passdo', () => {
    expect(decode('x1bl15').length).toBe(6);
  });
});
