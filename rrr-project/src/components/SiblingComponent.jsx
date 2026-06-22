import { useState } from "react";

const SiblingComponent = () => {
  const [text, setText] = useState(' RRR');

  return (
    <>
      <h1>Текущий текст:{text}</h1>
      <button onClick={() =>setText(' REDEV')}>Изменить текст</button>
    </>
  )
}

export default SiblingComponent;
