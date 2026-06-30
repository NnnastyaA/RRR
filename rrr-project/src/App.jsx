import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import UserProfile from "./components/UserProfile.jsx";
import TaskList from "./components/TaskList.jsx";
import ShoppingBacket from "./components/ShoppingBacket.jsx";

function App() {
    return (
        <>
            <UserProfile />
            <hr></hr>
            <TaskList />
            <hr></hr>
            <ShoppingBacket />
        </>
    );
}

export default App;