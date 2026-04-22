import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  CompFirst,
  CompSecond,
  CompThird,
  CompFourth,
  CompFifth,
  CompSixth,
} from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CompFirst />
    <CompSecond />
    <CompThird />
    <CompFourth />
    <CompFifth />
    <CompSixth />
  </StrictMode>,
);
