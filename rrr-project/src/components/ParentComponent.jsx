import { useState } from "react";
import ChildComponent from "./ChildComponent.jsx";
import SiblingComponent from "./SiblingComponent.jsx";


const ParentComponent = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('Настя');
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

    <ChildComponent 
      name={name} 
      currentCount ={counter}
      updateCount ={setCounter}
    />

    <SiblingComponent />
    </>
  );
};

export default ParentComponent;
