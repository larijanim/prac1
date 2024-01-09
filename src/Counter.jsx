import React, { useState } from 'react';

const Counter = () => {
  // State is declared inside the component
  const [count, setCount] = useState(0);

  const increment = (x) => {
    setCount(count + x);
  };

  const decrement = (y) => {
    setCount(count - y);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={()=>increment(1)}>Increment</button>
      <button onClick={()=>decrement(1)}>Decrement</button>
    </div>
  );
};
export default Counter;
// using closure
// import React from 'react';

// const Counter = () => {
//   // State is declared inside the closure
//   const createCounter = () => {
//     let count = 0;

//     const increment = () => {
//       count += 1;
//       console.log('Incremented! Current count:', count);
//     };

//     const decrement = () => {
//       count -= 1;
//       console.log('Decremented! Current count:', count);
//     };

//     const getCount = () => count;

//     return { increment, decrement, getCount };
//   };

//   const counterInstance = createCounter();

//   return (
//     <div>
//       <p>Count: {counterInstance.getCount()}</p>
//       <button onClick={counterInstance.increment}>Increment</button>
//       <button onClick={counterInstance.decrement}>Decrement</button>
//     </div>
//   );
// };