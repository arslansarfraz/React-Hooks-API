import React, { useReducer } from "react";
import CounterReducer from "./SimpleReducer";
function CompC() {
  const [count, dispatch] = useReducer(CounterReducer, 0);
  return (
    <>
      <h3>Counter value with useReducer is: {count}</h3>
      <button
        onClick={() => {
          dispatch("INCREMENT");
        }}
      >
        INCREMENT
      </button>
      <button
        onClick={() => {
          dispatch("DECREMENT");
        }}
      >
        DECREMENT
      </button>
    </>
  );
}
export default CompC;
