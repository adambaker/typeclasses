import {autoCurry} from './util'
import {Identity, Maybe} from './types'

export var Functor = function(type, defs) {
  type.prototype.fmap = defs.fmap;
};

export var fmap = function(f, obj) {
  return obj.fmap(f);
}.autoCurry();

// Some default instances:

// Functor(Array, {
//   fmap: function(f){
//     return this.map(function(x){
//       return f(x);
//     });
//   } // expand map function with lambda since map passes index in which messes with curried functions on applicatives
// });  

Functor(Function, {
  fmap: function(f){ return compose(f, this); }
});

Functor(Identity, {
  fmap: function(f){ return Identity(f(this.val)); }
});

Functor(Maybe, {
  fmap: function(f) {
    if(this.val == null) return this;
    return Maybe(f(this.val));
  }
});
