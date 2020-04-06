const calculateTriangleArea = (a, b, c) => {
  if (a <= 0 || b <= 0 || c <= 0 || a + b < c || a + c < b || b + c < a) {
    throw new Error('invalid triangle');
  }
  const s = (a + b + c) / 2;
  return Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
};

module.exports = calculateTriangleArea;
