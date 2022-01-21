import React, { useContext } from "react";
import CounterContext from "./SimpleContext";

function CompB() {
  let conterValue = useContext(CounterContext);
  console.log(conterValue);
  return (
    <>
      <h3>Counter value with useContext is: {conterValue[0]}</h3>
      <button
        onClick={() => {
          conterValue[1](++conterValue[0]);
        }}
      >
        Count
      </button>
    </>
  );
}
export default CompB;
