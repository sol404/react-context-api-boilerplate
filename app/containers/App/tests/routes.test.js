import routes from '../routes';

describe('<App /> routes', () => {
  test('should be return a object with the routes project', () => {
    expect(routes()).toBeDefined();
    expect(typeof routes()).toEqual('object');
  });
});
