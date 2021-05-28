import React, {useContext} from "react";
import {Button, List} from "antd";
import {AiOutlineDelete} from "react-icons/ai";
import {FlipMockContext} from "../AppContext";

const layoutStyle = {
    backgroundColor: "white",
    border: "2px solid black",
    outline: "#4CAF50 solid 10px",
    margin: "auto",
    padding: "20px",
    textAlign: "center",
};


const EndpointListItem = (props) => {
    const {cellItem} = props;
    const [state, dispatch] = useContext(FlipMockContext);
    if (cellItem === undefined) return null;
    const isSelected = cellItem.isSelected

    const onDelete = () => {
        dispatch({
            type: "Delete",
            payload: cellItem
        });
    }
    const onEdit = () => {
        dispatch({
            type: "Edit",
            payload: cellItem
        });
    }
    const onSelected = () => {
        dispatch({
            type: "Select",
            payload: cellItem
        });
    }

    const DeleteButton = () => {
        return <Button onClick={onDelete}>Delete</Button>
    }

    const EditButton = () => {
        return <Button onClick={onEdit}>Edit</Button>
    }
    const ShowButton = () => {
        return <Button onClick={onSelected}>{isSelected ? "Hide" : "Show"}</Button>
    };

    return <>
        <List.Item
            style={layoutStyle}
            actions={[<EditButton/>, <ShowButton/>, <DeleteButton/>]}>
            <div onClick={onSelected}>{cellItem.endpoint}</div>
        </List.Item>
    </>
};

export default EndpointListItem;
