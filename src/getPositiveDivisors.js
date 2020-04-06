const getPositiveDivisors = (number) => {
  const result = [];
  if (typeof number === 'number' && Math.abs(number) > 0 && number % 1.0 === 0) {
    const absNumber = Math.abs(number);
    for (let i = 0; i <= absNumber / 2; i += 1) {
      if (absNumber % i === 0) {
        result.push(i);
      }
    }
    result.push(absNumber);
  }
  return result;
};

module.exports = getPositiveDivisors;
