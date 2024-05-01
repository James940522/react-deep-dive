import './App.css';
import Counter1 from './components/use-counter/counter-1';
import Counter2 from './components/use-counter/counter-2';
import Counter from './components/counter';
import {
  Counter1 as StoreCounter1,
  Counter2 as StoreCounter2,
} from './components/use-store/counter';
import {
  Counter as SelectorCounter,
  TextEditor,
} from './components/use-store-selector/counter';

function App() {
  return (
    <>
      <div className="card">
        <div style={{ border: '1px solid white', paddingBottom: '10px' }}>
          <h2>let state</h2>
          <Counter />
        </div>

        <div style={{ border: '1px solid white', paddingBottom: '10px' }}>
          <h2>use-counter</h2>
          <Counter1 />
          <Counter2 />
        </div>

        <div style={{ border: '1px solid white', paddingBottom: '10px' }}>
          <h2>use-store</h2>
          <StoreCounter1 />
          <StoreCounter2 />
        </div>

        <div style={{ border: '1px solid white', paddingBottom: '10px' }}>
          <h2>use-store-selector</h2>
          <SelectorCounter />
          <TextEditor />
        </div>
      </div>
    </>
  );
}

export default App;
