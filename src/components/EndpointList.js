import React from "react";
import {List} from "antd";
import EndpointListItem from "./EndpointListItem";

const layoutStyle = {
    backgroundColor: "white",
};

const EndpointList = (props) => {
    const {mockList} = props;
    const renderItemList = (item) => {
        return (
            <EndpointListItem
                cellItem={item}
                onDeleteClicked={props.onDeleteClicked}
                onEditClicked={props.onEditClicked}
                onSelectedItem={props.onSelectedItem}
            />
        );
    };

    return (
        <List
            style={layoutStyle}
            split={true}
            size="large"
            dataSource={mockList}
            renderItem={renderItemList}
        />
    );
};

export default EndpointList;
