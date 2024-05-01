import { useReducer } from 'react';
import { Initializer } from '../types';

export default function useStateWithUseReducer<T>(initialState: T) {
  const [state, dispatch] = useReducer(
    (state: T, action: Initializer<T>) =>
      typeof action === 'function' ? action(state) : action,
    initialState,
  );
  return [state, dispatch];
}
