import React, { useState } from "react";
import CompA from "./compA";
import CounterContext from "./SimpleContext";
import CompC from "./CompC";

function App() {
  const counterState = useState(0);

  return (
    <>
      <CounterContext.Provider value={counterState}>
        <CompA />
      </CounterContext.Provider>
      <CompC />
    </>
  );
}
export default App;
