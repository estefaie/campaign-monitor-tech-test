const arrangeBy = require('../arrangeBy.js');

describe('arrangeBy', () => {
  it('return an empty object when is passed an empty array', () => {
    const arrangeByNothing = arrangeBy();
    expect(arrangeByNothing([])).toEqual({});
  });
  it('groups the list by the key passed to it', () => {
    const input = [
      {
        user: 'H',
        experience: 10,
        ageGroup: 30,
      },
      {
        user: 'Q',
        experience: 10,
        ageGroup: 20,
      },
      {
        user: 'P',
        experience: 5,
        ageGroup: 30,
      },
    ];
    const arrangeByUser = arrangeBy('user');
    expect(arrangeByUser(input)).toEqual({
      H: [{ ageGroup: 30, experience: 10, user: 'H' }],
      P: [{ ageGroup: 30, experience: 5, user: 'P' }],
      Q: [{ ageGroup: 20, experience: 10, user: 'Q' }],
    });
    const arrangeByExperience = arrangeBy('experience');
    expect(arrangeByExperience(input)).toEqual({
      10: [
        { ageGroup: 30, experience: 10, user: 'H' },
        { ageGroup: 20, experience: 10, user: 'Q' },
      ],
      5: [{ ageGroup: 30, experience: 5, user: 'P' }],
    });
    const arrangeByAgeGroup = arrangeBy('ageGroup');
    expect(arrangeByAgeGroup(input)).toEqual({
      30: [
        { ageGroup: 30, experience: 10, user: 'H' },
        { ageGroup: 30, experience: 5, user: 'P' },
      ],
      20: [{ ageGroup: 20, experience: 10, user: 'Q' }],
    });
  });
  it('does not mutate the original input array', () => {
    const input = [
      {
        user: 'H',
        experience: 10,
        ageGroup: 30,
      },
      {
        user: 'Q',
        experience: 10,
        ageGroup: 20,
      },
    ];
    const arrangeByUser = arrangeBy('user');
    expect(arrangeByUser(input)).toEqual({
      H: [{ ageGroup: 30, experience: 10, user: 'H' }],
      Q: [{ ageGroup: 20, experience: 10, user: 'Q' }],
    });
    expect(input).toEqual([
      {
        user: 'H',
        experience: 10,
        ageGroup: 30,
      },
      {
        user: 'Q',
        experience: 10,
        ageGroup: 20,
      },
    ]);
  });
  it('excludes the items which do not have the provided key', () => {
    const input = [
      {
        user: 'H',
        experience: 10,
        ageGroup: 30,
        address: 'some address',
      },
      {
        user: 'Q',
        experience: 10,
        ageGroup: 20,
      },
    ];
    const arrangeByAddress = arrangeBy('address');
    expect(arrangeByAddress(input)).toEqual({
      'some address': [{ ageGroup: 30, experience: 10, user: 'H', address: 'some address' }],
    });
  });
  it('excludes the items which are null, undefined, or not an object', () => {
    const input = [
      {
        user: 'H',
        experience: 10,
        ageGroup: 30,
        address: 'some address',
      },
      null,
      undefined,
      12,
      true,
    ];
    const arrangeByAddress = arrangeBy('address');
    expect(arrangeByAddress(input)).toEqual({
      'some address': [{ ageGroup: 30, experience: 10, user: 'H', address: 'some address' }],
    });
  });
  it('handles one or more objects being attached to a key', () => {
    const input = [
      {
        key: { a: 1, b: 2 },
      },
      {
        key: [1, 2, 3],
      },
      {
        key: [{ a: 2 }, { b: 2 }],
      },
    ];
    const arrangeByKey = arrangeBy('key');
    expect(arrangeByKey(input)).toEqual({
      '[1,2,3]': [{ key: [1, 2, 3] }],
      '[{"a":2},{"b":2}]': [{ key: [{ a: 2 }, { b: 2 }] }],
      '{"a":1,"b":2}': [{ key: { a: 1, b: 2 } }],
    });
  });
});
