const calculateTriangleArea = require('../calculateTriangleArea');

const checkInvalidTriangle = (a, b, c) => {
  try {
    calculateTriangleArea(a, b, c);
    throw new Error();
  } catch (err) {
    expect(err.message).toEqual('invalid triangle');
  }
};

describe('calculateTriangleArea', () => {
  it('returns invalid triangle error when one of the sides is negative or zero', () => {
    checkInvalidTriangle(1, 1, 0);
    checkInvalidTriangle(1, 0, 1);
    checkInvalidTriangle(0, 1, 1);
    checkInvalidTriangle(1, 1, -2);
    checkInvalidTriangle(1, -2, 1);
    checkInvalidTriangle(0, -2, 1);
  });
  it('returns invalid triangle error when sum of two sides is less than the other side', () => {
    checkInvalidTriangle(1, 1, 3);
    checkInvalidTriangle(1, 3, 1);
    checkInvalidTriangle(3, 1, 1);
  });
  it('returns the area correctly when the sizes can make a triangle', () => {
    expect(calculateTriangleArea(3, 4, 5)).toBe(6);
    expect(calculateTriangleArea(3, 3, 5)).toBe(4.14578098794425);
  });
});
