import distanceToNearestVowel from './index';

test('for input "abc" returns [0,1,2]', () => {
  expect(distanceToNearestVowel('abc')).toEqual([0, 1, 2]);
});
