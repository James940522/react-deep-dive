import { useEffect, useState } from 'react';
import { Initializer, Store } from '../types';

export function createStore<T>(initialState: Initializer<T>) {
  let state =
    typeof initialState === 'function' ? initialState() : initialState;

  const callbacks = new Set<() => void>();

  const get = () => state;

  const set = (nextState: T | ((prev: T) => T)) => {
    state =
      typeof nextState === 'function'
        ? (nextState as (prev: T) => T)(state)
        : nextState;

    callbacks.forEach(cb => cb());

    return state;
  };

  const subscribe = (callback: () => void) => {
    callbacks.add(callback);
    return () => {
      callbacks.delete(callback);
    };
  };

  return { get, set, subscribe };
}

export default function useStore<T>(store: Store<T>) {
  const [state, setState] = useState<T>(store.get());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.get());
    });
    return unsubscribe;
  }, [store]);

  return [state, store.set] as const;
}
