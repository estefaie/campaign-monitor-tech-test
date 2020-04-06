const getPositiveDivisors = require('../getPositiveDivisors');

describe('getPositiveDivisors', () => {
  it('should return all of the positive divisors of a positive number', () => {
    expect(getPositiveDivisors(60)).toEqual([1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60]);
    expect(getPositiveDivisors(42)).toEqual([1, 2, 3, 6, 7, 14, 21, 42]);
    expect(getPositiveDivisors(41)).toEqual([1, 41]);
  });
  it('should return all of the positive divisors of a negative number', () => {
    expect(getPositiveDivisors(-60)).toEqual([1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60]);
    expect(getPositiveDivisors(-42)).toEqual([1, 2, 3, 6, 7, 14, 21, 42]);
    expect(getPositiveDivisors(-41)).toEqual([1, 41]);
  });
  it('should return an empty array when 0 passed to it', () => {
    expect(getPositiveDivisors(0)).toEqual([]);
  });
  it('should return an empty array a floating point number passed to it', () => {
    expect(getPositiveDivisors(10.4)).toEqual([]);
    expect(getPositiveDivisors(10.0001)).toEqual([]);
  });
  it('should return an empty array a non number argument is passed to it', () => {
    expect(getPositiveDivisors()).toEqual([]);
    expect(getPositiveDivisors({})).toEqual([]);
    expect(getPositiveDivisors(true)).toEqual([]);
    expect(getPositiveDivisors('some string')).toEqual([]);
    expect(getPositiveDivisors(null)).toEqual([]);
  });
});
