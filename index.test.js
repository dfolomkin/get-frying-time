var getFryingTime = require('./index.js').getFryingTime;

describe('getFryingTime', () => {
  test('should return correct time', () => {
    expect(getFryingTime(3, 2, 1)).toBe(3);
  });

  test('should return correct time if it needed to be round', () => {
    expect(getFryingTime(5, 3, 1)).toBe(4);
  });

  test('should return correct time if great amount of cutlets', () => {
    expect(getFryingTime(30, 3, 1)).toBe(20);
  });
});
