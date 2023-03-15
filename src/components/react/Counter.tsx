import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div class="text-xl">
      <button
        onClick={() => setCount(count + 1)}
        class="border-2 border-blue-300 py-2 px-4"
      >
        Increment
      </button>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count - 1)}
        class="border-2 border-blue-300 py-2 px-4"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
