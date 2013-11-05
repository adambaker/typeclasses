import {autoCurry} from './util';

import {Functor, fmap} from './functor';
import {Applicative, ap, pure, liftA2, liftA3} from './applicative';
import {Monoid, mappend, mconcat} from './monoid';
import {Monad, mjoin, mbind, mcompose, liftM, State} from './monad';

export {
  Functor, fmap,
  Applicative, ap, pure, liftA2, liftA3,
  Monoid, mappend, mconcat,
  Monad, mjoin, mbind, mcompose, liftM, State
};
