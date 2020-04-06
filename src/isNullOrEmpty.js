const isNullOrEmpty = (input) => {
  if (input === '' || input === null) {
    return true;
  }
  return false;
};

module.exports = isNullOrEmpty;
