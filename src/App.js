import './App.css';
import React from "react";
import TaskAdd from "./Components/TaskAdd/TaskAdd";
import TaskList from "./Components/TasksList/TaskList";
import Navigations from "./Components/Navigation/Navigations";


function App() {
    return (
        <div className="App">
            <Navigations/>
            <TaskList/>
            <TaskAdd />
        </div>
    );
}

export default App;
