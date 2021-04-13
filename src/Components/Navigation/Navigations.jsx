import React from 'react';
import {Col, Input, Radio, Row} from "antd";
import {useDispatch, useSelector} from "react-redux";
const Navigation = () => {
    const taskValue = useSelector(state => state.valueInput);
    const dispatch = useDispatch();
    const options = [
        {label: 'All', value: 'All'},
        {label: 'Active', value: 'Active'},
        {label: 'Done', value: 'Done'},
    ];
    const changeValue = (e) => {
        dispatch({
            type: "ChangeValue",
            value: e.target.value
        })
    }
    return(
        <>
            <Row>
                <Col flex="auto">
                    <Input.Search placeholder="input search text" onSearch={() => {
                    }} enterButton/>
                </Col>
                <Col flex="250px">
                    <Radio.Group
                        options={options}
                        onChange={changeValue}
                        value={taskValue}
                        optionType="button"
                        buttonStyle="solid"
                    />
                </Col>
            </Row>


        </>
    )
}

export default Navigation;