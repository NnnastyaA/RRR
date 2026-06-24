import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import UserProfile from "./assets/components/UserProfile.jsx";
import TaskList from "./assets/components/TaskList.jsx";

function App() {
    return (
        <>
            <UserProfile />
            <hr></hr>
            <TaskList />
        </>
    );
}

export default App;