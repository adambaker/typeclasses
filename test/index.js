var tc = require('../cjs/index'),
  chai       = require('chai'),
  expect     = chai.expect;

describe('classes', function() {
  it('has Functors', function() {
    expect(tc.Functor).to.be.a('function');
  });

  it('has Applicatives', function() {
    expect(tc.Applicative).to.be.a('function');
  });

  it('has Monads', function() {
    expect(tc.Monad).to.be.a('function');
  });
});
