import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import LifecycleComponent from "./components/LifecycleComponent.jsx"
import FunctionalComponent from "./components/FunctionalComponent.jsx"


function App() {
    const [state, setState] = useState(0)

    return (
        <>
           {state %2===0 ? <FunctionalComponent number={state} />: <h1>Меньше</h1>}
            <button onClick={()=>setState(state=> state + 1)}>Delete</button>

        </>
    );
}

export default App;