import './App.css';
import React from "react";
import TaskAdd from "./Components/TaskAdd/TaskAdd";
import TaskList from "./Components/TasksList/TaskList";
import Navigations from "./Components/Navigation/Navigations";
import {useDispatch, useSelector} from "react-redux";
import {addTaskActionCreator, deleteTaskActionCreator, filterTasksCreator, getInputValueActionCreator} from "./store";
import TweenOne from 'rc-tween-one';

function App() {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);

    const taskValue = useSelector(state => state.valueInput)

    let listOfTasks = taskValue === 'All' ? tasks : tasks.filter(task=> task.status === taskValue)

    ///option with tasks statuses on button
    const options = [
        {label: 'All', value: 'All'},
        {label: 'Active', value: 'Active'},
        {label: 'Done', value: 'Done'},
    ];
    ///filter action with task statuses
    const onFilterChange = (e) =>{
        dispatch(filterTasksCreator(e.target.value))
    }

    ///controlled component value in new task input
    let taskDescriptionInput = useSelector(initialState => initialState.newTaskInputText)

    ///action when user add new task
    const onTaskAdd = () => {
        dispatch(addTaskActionCreator(taskDescriptionInput))
    }

    ///onchange action on controlled component
    const setInputTaskAdd = (e) => {
       dispatch(getInputValueActionCreator(e.currentTarget.value))
    }
    ///action for delete task
    const deleteTask = (id) =>{
        dispatch(deleteTaskActionCreator(id))
    }

    return (
        <div className="App">
            <Navigations
                taskValue={taskValue}
                options={options}
                onFilterChange={onFilterChange}
            />
            <TaskList
                deleteTask={deleteTask}
                tasks={listOfTasks}
            />
            <TaskAdd
                onTaskAdd={onTaskAdd}
                setInputTaskAdd={setInputTaskAdd}
                taskDescriptionInput={taskDescriptionInput}
            />
            
        </div>
    );
}

export default App;
