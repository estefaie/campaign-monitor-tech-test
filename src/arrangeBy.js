const getValue = (value) => (typeof value === 'object' ? JSON.stringify(value) : value);

const arrangeBy = (key) => (list) =>
  list.reduce((groupedByKeyMap, item) => {
    if (!item || !item[key] || typeof item !== 'object') {
      return groupedByKeyMap;
    }
    const valueForKey = getValue(item[key]);
    if (groupedByKeyMap[valueForKey]) {
      groupedByKeyMap[valueForKey].push(item);
      return groupedByKeyMap;
    }
    return { ...groupedByKeyMap, [valueForKey]: [item] };
  }, {});

module.exports = arrangeBy;
