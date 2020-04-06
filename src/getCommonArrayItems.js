const getCommonArrayItems = (inputArray) => {
  const itemCounts = {};
  inputArray.forEach((item) => {
    if (itemCounts[item]) {
      itemCounts[item] += 1;
    } else {
      itemCounts[item] = 1;
    }
  });
  let maxCount = 0;
  let maxElements = [];
  Object.keys(itemCounts).forEach((key) => {
    if (itemCounts[key] > maxCount) {
      maxCount = itemCounts[key];
      maxElements = [parseInt(key, 0)];
    } else if (itemCounts[key] === maxCount) {
      maxElements.push(parseInt(key, 0));
    }
  });
  return maxElements.sort((a, b) => a - b);
};

module.exports = getCommonArrayItems;
