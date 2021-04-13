import {createStore} from "redux";
const ADD_TASK = "ADD_TASK";


    let initialState = {
        valueInput: 'All',
        tasks: [
            {id: 1, taskDescription:'Racing? car sprays burning fuel into crowdRacing car sprays burning fuel into crowd.', status: 'toDo'},
            {id: 3, taskDescription: 'Japanese princess to wed commoner.', status: 'Compelled'},
            {id: 5, taskDescription: 'Australian walks 100km after outback crash.', status: 'toDo'},
            {id: 7, taskDescription: 'Man charged over missing wedding girl.'},
            {id: 8, taskDescription: 'Los Angeles battles huge wildfires.', status: 'Compelled'},
        ],
        newTaskInputText: ''
    }


function listReducer(state = initialState, action){
    switch (action.type){
        case "ChangeValue":
            return {
                ...state,
                valueInput: action.value
            }
        case ADD_TASK:
            let newTask = {id: 10, taskDescription: action.newTaskInputText, status: "Done"}
            return {
                ...state,
                tasks: [...state.tasks, newTask],
            }
        case "GetInputValue":
            return {
                ...state,
                newTaskInputText: action.value
            }
        case "RemoveTask":
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
const store = createStore(listReducer)

export default store;