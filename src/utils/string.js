/**
 * Retorna verdadeiro se `value` é string e false se `value` não for string
 */
export const isString = (value) => {
  const verify = typeof value === 'string';

  return verify;
}