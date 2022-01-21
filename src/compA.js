import React, { useState } from "react";
import CompB from "./compB";
function CompA() {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <>
      <CompB />
      <h3>Counter value with useState is: {count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count
      </button>
    </>
  );
}
export default CompA;
