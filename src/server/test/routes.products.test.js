const proxyquire = require('proxyquire');

const { ProductsServiceMock } = require('../utils/mocks');
const testServer = require('../utils/testServer');

describe('routes - products', () => {
  const route = proxyquire('../routes/', {
    '../services': ProductsServiceMock,
  });

  const request = testServer(route);
  describe('GET / products', () => {
    it('should respond with status 200', (done) => {
      request.get('/api/products').expect(200, done);
    });
  });
});
