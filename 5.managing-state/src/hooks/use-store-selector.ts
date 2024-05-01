import { useEffect, useState } from 'react';
import { Store } from '../types';

export default function useStoreSelector<T, K>(
  store: Store<T>,
  selector: (state: T) => K,
) {
  const [state, setState] = useState(() => selector(store.get()));

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(selector(store.get()));
    });
    return unsubscribe;
  }, [store, selector]);

  return state;
}
