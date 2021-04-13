import React from 'react';
import {Button, Col, Divider, Input, Row} from "antd";
import {useSelector, useDispatch} from "react-redux";
import {addTaskActionCreator} from "../../store";

const TaskAdd = () => {
    const dispatch = useDispatch();
    let taskDescriptionInput = useSelector(initialState => initialState.newTaskInputText)
    const onTaskAdd = () => {
        dispatch(addTaskActionCreator(taskDescriptionInput))
    }

    const setInputTaskAdd = (e) => {
        dispatch({
            type: "GetInputValue",
            value: e.currentTarget.value
        })
    }

    return (
        <>
            <Divider orientation="left">Add your task</Divider>
            <form>
            <Row>
                <Col span={18}>
                    <Input.TextArea onChange={setInputTaskAdd} name={"newTaskInputText"} value={taskDescriptionInput}  placeholder={"add task"}/>
                </Col>
                <Col span={6}>
                    <Button onClick={onTaskAdd} type={"primary"}>Send task</Button>
                </Col>
            </Row>
            </form>
        </>
    )
}
export default TaskAdd;