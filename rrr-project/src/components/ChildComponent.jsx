import { useState } from "react";


const ChildComponent = (props) => {
  return <h1>Привет, {props.name}! Текущее значение: {props.currentCount}</h1>
};

export default ChildComponent;
