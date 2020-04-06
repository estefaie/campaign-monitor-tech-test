const getCommonArrayItems = require('../getCommonArrayItems');

describe('getCommonArrayItems', () => {
  it('returns an empty array when the input array is empty', () => {
    expect(getCommonArrayItems([])).toEqual([]);
  });
  it('returns an array of one item when there is one common item', () => {
    expect(getCommonArrayItems([1, 2, 3, 4, 5, 1, 6, 7])).toEqual([1]);
  });
  it('returns an array of multiple items when there are multiple common items', () => {
    expect(getCommonArrayItems([1, 2, 3, 4, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(getCommonArrayItems([5, 4, 3, 2, 4, 5, 1, 6, 1, 2, 5, 4])).toEqual([4, 5]);
  });
});
