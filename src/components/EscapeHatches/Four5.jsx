import { useState, useEffect } from 'react';

function useCounter() {
  
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return count;
}

const Four5 = () => {
  const count = useCounter();
  return (
    <div>
      <h1>Seconds passed: {count}</h1>
    </div>
  )
}

export default Four5

