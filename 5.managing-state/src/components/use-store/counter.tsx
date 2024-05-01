import useStore, { createStore } from '../../hooks/use-store';

const store = createStore(() => 0);

export function Counter1() {
  const [state, setState] = useStore(store);

  const handleClick = () => {
    setState(state + 1);
  };

  return (
    <div>
      <h3>Counter1: {state}</h3>
      <button onClick={handleClick}>+</button>
    </div>
  );
}

export function Counter2() {
  const [state, setState] = useStore(store);

  const handleClick = () => {
    setState(state + 1);
  };

  return (
    <div>
      <h3>Counter2: {state}</h3>
      <button onClick={handleClick}>+</button>
    </div>
  );
}
