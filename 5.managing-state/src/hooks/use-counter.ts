import { useState } from 'react';

// 가장 기본적인 방법: useState와 useReducer
function useCounter(initCount = 0) {
  const [count, setCount] = useState(initCount);

  const inc = () => {
    setCount(prev => prev + 1);
  };

  return { count, inc };
}

export default useCounter;
