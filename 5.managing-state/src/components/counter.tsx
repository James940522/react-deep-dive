import { Fragment } from 'react/jsx-runtime';
import { Initializer } from '../types';

export type State = { counter: number };

let state: State = { counter: 0 };

export function get(): State {
  return state;
}

export function set<T>(nextState: Initializer<T>) {
  state = typeof nextState === 'function' ? nextState(state) : nextState;
}

export default function Counter() {
  const state = get();

  function handleClick() {
    set({ counter: state.counter + 1 });
  }

  return (
    <Fragment>
      <h3>{state.counter}</h3>
      <button onClick={handleClick}>+</button>
    </Fragment>
  );
}
