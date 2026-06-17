import { useState } from "react";

const Input = () => {
  const [state, setState] = useState("Hello");
  return (
    <>
      <input value={state} onChange={(e) => setState(e.target.value)} />
      {state}
      <button onClick={() => setState("")}>Reset</button>
    </>
  );
};

export default Input;
