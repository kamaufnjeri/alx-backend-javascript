const { expect } = require('chai');
const request = require('request');
const server = require('./api');

describe('Index page', () => {
  it('Correct status code?', (done) => {
    request.get('http://localhost:7865', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

after(() => {
  server.close();
});
