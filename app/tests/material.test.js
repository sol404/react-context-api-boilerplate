import theme from '../material';

describe('material.js', () => {
  test('should be return a material object theme', () => {
    expect(theme()).toBeDefined();
    expect(typeof theme()).toEqual('object');
  });
});
