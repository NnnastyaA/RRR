import { useState } from 'react';

const Button = () => {
  const [state, setState] = useState(0);
  console.log(state);
  return (
    <>
      <h1>Number of clicks: {state}</h1>
      <button onClick={() => setState(state + 1)}>Click me</button>
    </>
  );
};

export default Button;
