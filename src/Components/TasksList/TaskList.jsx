import React from 'react';
import {Button, Col, Divider, List, Typography} from "antd";
import {CheckOutlined, DeleteOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";

const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);
    const deleteTask = (id) =>{
       dispatch({
           type: "RemoveTask",
           id: id
       })

    }
    return(
        <>
        <Divider orientation="left">Tasks</Divider>
            <List
                bordered
                dataSource={tasks}
                renderItem={item => (
                    <List.Item key={item.id}>
                        <Col span={18}>
                            <Typography.Text mark>[ITEM]</Typography.Text>
                            {item.taskDescription}
                        </Col>
                        <Col span={6} style={{float: 'right'}}>
                            <Button onClick={()=>deleteTask(item.id)} danger><DeleteOutlined/></Button>
                            <Button><CheckOutlined/></Button>
                        </Col>
                    </List.Item>
                )}
            />
        </>
    )
}
export default TaskList;