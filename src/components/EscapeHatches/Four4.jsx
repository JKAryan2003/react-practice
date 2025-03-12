import React, { useMemo, useState } from 'react'

const Four4 = () => {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expensiveTask(num) {
    for(let i=0; i<=1000; i++){}
    return num*2;
  }

  let doubleValue = useMemo(() => expensiveTask(input), [input]);

  return (
    <div>
      Count is {count}

      <button onClick={() => setCount(count+1)}>
        Click me
      </button>

      <input type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)} 
      />

      Double : {doubleValue}
    </div>
  )
}

export default Four4