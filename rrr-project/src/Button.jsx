import { useState } from "react";

const Button = () => {
  const [state, setState] = useState(0);
  //console.log(state);
  return (
    <>
      <h1>Number of clicks: {state}</h1>
      <button onClick={() => setState((oldState) => oldState + 1)}>
        Click me
      </button>
      <button onClick={() => setState(0)}>Reset</button>
    </>
  );
};

export default Button;
