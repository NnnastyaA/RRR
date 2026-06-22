import { useState } from "react";

const ParentComponent = () => {
  const [counter, setCounter] = useState(0);
  console.log(counter);

  return (
    <>
      <h1>Текущее значение: {counter} </h1>
      <button onClick={() => setCounter((counter) => counter + 1)}>
        Увеличить
      </button>
      <button onClick={() => setCounter(0)}>Сбросить</button>
      <button onClick={() =>setCounter(Math.floor(Math.random() * 10) + 1) }>Случайное значение</button>
      <button onClick={() => setCounter((counter) => counter - 1)}>
        Уменьшить
      </button>
    </>
  );
};

export default ParentComponent;
