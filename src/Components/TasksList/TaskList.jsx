import React from 'react';
import {Button, Col, Divider, List, Typography} from "antd";
import {CheckOutlined, DeleteOutlined} from "@ant-design/icons";
import * as classes from './TaskList.module.css';
const TaskList = ({deleteTask, tasks}) => {

    return(
        <>
        <Divider orientation="left">Tasks</Divider>
            <List
                bordered
                dataSource={tasks}
                renderItem={item => (
                    <List.Item key={item.id} >
                        <Col span={18}>
                            <Typography.Text mark>[ITEM]</Typography.Text>
                            {item.taskDescription}
                        </Col>
                        <Col span={6} style={{float: 'right'}}>
                            <Button className={classes.button} onClick={()=>deleteTask(item.id)} danger><DeleteOutlined/></Button>
                            <Button className={classes.button}><CheckOutlined/></Button>
                        </Col>
                    </List.Item>
                )}
            />
        </>
    )
}
export default TaskList;