const sumAll = require('./sumAll')

describe('sumAll', function() {
  it('sums numbers within the range', function() {
    expect(sumAll(1, 4)).toEqual(10);
  });
  ('works with large numbers', function() {
    expect(sumAll(1, 4000)).toEqual(8002000);
  });
  ('works with larger number first', function() {
    expect(sumAll(123, 1)).toEqual(7626);
  });
  ('returns ERROR with negative numbers', function() {
    expect(sumAll(-10, 4)).toEqual('ERROR');
  });
  ('returns ERROR with non-number parameters', function() {
    expect(sumAll(10, "90")).toEqual('ERROR');
  });
  ('returns ERROR with non-number parameters', function() {
    expect(sumAll(10, [90, 1])).toEqual('ERROR');
  });
});
