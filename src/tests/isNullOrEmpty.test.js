const isNullOrEmpty = require('../isNullOrEmpty');

describe('isNullOrEmpty', () => {
  it('return true when input is null', () => {
    expect(isNullOrEmpty(null)).toBe(true);
  });
  it('return true when input is an empty string', () => {
    expect(isNullOrEmpty('')).toBe(true);
  });
  it('return false when input is not passed (undefined)', () => {
    expect(isNullOrEmpty()).toBe(false);
  });
  it('return false when input is a non empty string', () => {
    expect(isNullOrEmpty('a')).toBe(false);
    expect(isNullOrEmpty('null')).toBe(false);
  });
  it('return false when a number is passed to it', () => {
    expect(isNullOrEmpty(1)).toBe(false);
  });
  it('return false when a boolean is passed to it', () => {
    expect(isNullOrEmpty(false)).toBe(false);
    expect(isNullOrEmpty(true)).toBe(false);
  });
});
