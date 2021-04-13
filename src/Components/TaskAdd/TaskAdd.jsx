import React from 'react';
import {Button, Col, Divider, Input, Row} from "antd";


const TaskAdd = ({taskDescriptionInput, onTaskAdd, setInputTaskAdd}) => {


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