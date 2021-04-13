import {createStore} from "redux";

const ADD_TASK = "ADD_TASK";
const FILTERED_TASKS = "FILTERED_TASKS";
const REMOVE_TASK = "REMOVE_TASK";
const GET_INPUT_VALUE = "GET_INPUT_VALUE";

    let initialState = {
        tasks: [
            {id: 1, taskDescription:'Racing? car sprays burning fuel into crowdRacing car sprays burning fuel into crowd.', status: 'Active'},
            {id: 2, taskDescription: 'Japanese princess to wed commoner.', status: 'Done'},
            {id: 3, taskDescription: 'Australian walks 100km after outback crash.', status: 'Active'},
            {id: 4, taskDescription: 'Man charged over missing wedding girl.', status: 'Done'},
            {id: 5, taskDescription: 'Los Angeles battles huge wildfires.', status: 'Done'},
        ],
        valueInput: 'All',
        newTaskInputText: ''
    }


function listReducer(state = initialState, action){
    switch (action.type){
        case FILTERED_TASKS:
            return {
                ...state,
                valueInput: action.value
            }
        case ADD_TASK:
            let newTask = {id: state.tasks.length+1, taskDescription: action.newTaskInputText, status: "Active"}
            return {
                ...state,
                tasks: [...state.tasks, newTask],
                newTaskInputText: ''
            }
        case GET_INPUT_VALUE:
            return {
                ...state,
                newTaskInputText: action.value
            }
        case REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(item => item.id !== action.id)
            }

        default:
            return state
    }
}

export const addTaskActionCreator =(newTaskInputText)=> ({
    type: ADD_TASK,
    newTaskInputText
})

export const filterTasksCreator = (taskStatus) => ({
    type: FILTERED_TASKS,
    value: taskStatus
})

export const deleteTaskActionCreator = (id) => ({
    type: REMOVE_TASK,
    id
    }
)

export const getInputValueActionCreator = (value) => ({
    type: GET_INPUT_VALUE,
    value
})

const store = createStore(listReducer)


export default store;