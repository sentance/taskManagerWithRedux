import React from 'react';
import {Col, Input, Radio, Row} from "antd";
import * as classes from './Navigations.module.css';

const Navigation = ({taskValue, options, onFilterChange}) => {

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
                        onChange={onFilterChange}
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