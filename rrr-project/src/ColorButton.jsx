import { useState } from "react";

const ColorButton = () => {
  const [color, setColor] = useState("#008080");
  return (
    <>
      <h1 style={{ color: color}}>Click the button to change a color</h1>;
      <button onClick={() => setColor("#" + Math.random().toString(16).slice(2, 8))}>
        Change color
      </button>
    </>
  );
};

export default ColorButton;
