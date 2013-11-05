
export var Constructor = function(f) {
  var x = function(){
    if(!(this instanceof x)){
      var inst = new x();
      f.apply(inst, arguments);
      return inst;
    }
    f.apply(this, arguments);
  };

  return x;
};

export var makeType = function(f) {
  f = f || function(v){ this.val = v; }
  return Constructor(f);
};

var toArray = function(x) {
  return Array.prototype.slice.call(x);
}

var curry = function (fn /* variadic number of args */) {
  var args = Array.prototype.slice.call(arguments, 1);
  var f = function () {
    return fn.apply(this, args.concat(toArray(arguments)));
  };
  return f;
};

export var autoCurry = function (fn, numArgs) {
  numArgs = numArgs || fn.length;
  var f = function () {
    if (arguments.length < numArgs) {
      return numArgs - arguments.length > 0 ?
        autoCurry(curry.apply(this, [fn].concat(toArray(arguments))),
            numArgs - arguments.length) :
        curry.apply(this, [fn].concat(toArray(arguments)));
    }
    else {
      return fn.apply(this, arguments);
    }
  };
  f.toString = function(){ return fn.toString(); };
  f.curried = true;
  f.fn = fn;
  f.arity = fn.length;
  return f;
};

Function.prototype.autoCurry = function(n) {
  return autoCurry(this, n);
}


export var K = function(x){return function(){return x;};};
export var I = function(x){return x;};
