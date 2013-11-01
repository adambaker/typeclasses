import {autoCurry} from './util';

var hasAC == Boolean(Function.prototype.autoCurry);

if(!hasAC) {
  //the rest of the lib wants autoCurry on Function's prototype
  //this sucks, but I'll clean it up later
  Function.prototype.autoCurry = function(n) {
    return autoCurry(this, n);
  }
};

import {Functor, fmap} from './functor';
require('./applicative');
require('./monoid');
require('./monad');
require('./promise');

if(!hasAC) {
  //remove autoCurry from function's prototype so that it
  //doesn't affect users
  delete Function.prototype.autoCurry
};

export { Functor, fmap };
