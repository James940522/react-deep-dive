import { ChangeEvent, Fragment, useCallback, useEffect } from 'react';
import { createStore } from '../../hooks/use-store';
import useStoreSelector from '../../hooks/use-store-selector';

const store = createStore({ count: 0, text: 'hello' });

export function Counter() {
  const counter = useStoreSelector(
    store,
    useCallback(state => state.count, []),
  );

  function handleClick() {
    store.set(prev => ({ ...prev, count: prev.count + 1 }));
  }

  useEffect(() => {
    console.log('Counter rendered');
  });

  return (
    <Fragment>
      <h3>Counter: {counter}</h3>
      <button onClick={handleClick}>+</button>
    </Fragment>
  );
}

const textSelector = (state: ReturnType<typeof store.get>) => state.text;

export function TextEditor() {
  const text = useStoreSelector(store, textSelector);

  useEffect(() => {
    console.log('Counter rendered');
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    store.set(prev => ({ ...prev, text: e.target.value }));
  }

  return (
    <Fragment>
      <input value={text} onChange={handleChange} />
      <p>{text}</p>
    </Fragment>
  );
}
