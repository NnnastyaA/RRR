import { useState } from "react";

const HideText = () => {
  const [state, setState] = useState(true);
  return (
    <>
      {state && <h1>It is a hidden text</h1>}
      <button onClick={() => setState(state => !state)}>Show/Hide</button>
    </>
  );
};

export default HideText;
