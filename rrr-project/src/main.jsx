import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CompFirst from "./CompFirst.jsx";
import CompSecond from "./CompSecond.jsx";
import CompThird from "./CompThird.jsx";
import CompFourth from "./CompFourth.jsx";
import CompFifth from "./CompFifth.jsx";
import CompSixth from "./CompSixth.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CompFirst num={26} />
    <CompSecond str={"My name is Nastya"} />
    <CompThird state={true} />
    <CompFourth obj={{ name: "Nastya", city: "Warsaw" }} />
    <CompFifth fun={() => "I am student"} />
    <CompSixth arr={[2, 22, 3, 33]} />
  </StrictMode>,
);
