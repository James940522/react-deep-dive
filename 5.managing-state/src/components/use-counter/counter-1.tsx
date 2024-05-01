import useCounter from '../../hooks/use-counter';

function Counter1() {
  const { count, inc } = useCounter(0);

  return (
    <div>
      <h3>Counter1: {count}</h3>
      <button onClick={inc}>+</button>
    </div>
  );
}

export default Counter1;
