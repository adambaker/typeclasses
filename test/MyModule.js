var MyModule = require('../cjs/MyModule').MyModule,
  chai       = require('chai'),
  expect     = chai.expect;

describe('MyModule', function() {
  it('exists', function() {
    expect(MyModule).to.be.a('function');
  });
});
