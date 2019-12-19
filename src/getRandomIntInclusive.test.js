import getRandomIntInclusive from './getRandomIntInclusive';

const randomInteger = getRandomIntInclusive(1, 7);

describe('getRandomInt function', () => {
  it('returns a random integer 1 - 7 inclusive', () => {
    expect(randomInteger).toBeGreaterThan(0);
    expect(randomInteger).toBeLessThanOrEqual(7);
  });
  it('is defined and not return null', () => {
    expect(randomInteger).toBeDefined();
    expect(randomInteger).not.toBeNull();
  })
})