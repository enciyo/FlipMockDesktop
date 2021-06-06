import React from "react";
import {Button, List} from "antd";
import {useDispatch} from "react-redux";
import {deleteMock, selectMock, updateMock} from "../redux/actionCreators";

const layoutStyle = {
    backgroundColor: "white",
    border: "2px solid black",
    outline: "#4CAF50 solid 10px",
    margin: "auto",
    padding: "20px",
    textAlign: "center",
};


const ListItemComponent = props => {
    const {cellItem} = props;
    if (cellItem === undefined) return null;
    const {isShow, endpoint} = cellItem
    const dispatch = useDispatch()

    const onDelete = () => {
        dispatch(deleteMock(cellItem))
    }
    const onEdit = () => {
        dispatch(updateMock(cellItem))
    }
    const onSelected = () => {
        dispatch(selectMock(cellItem))
    }

    const DeleteButton = () => {
        return <Button onClick={onDelete}>Delete</Button>
    }

    const EditButton = () => {
        return <Button onClick={onEdit}>Edit</Button>
    }
    const ShowButton = () => {
        return <Button onClick={onSelected}>{isShow ? "Hide" : "Show"}</Button>
    };

    return <>
        <List.Item
            style={layoutStyle}
            actions={[<EditButton/>, <ShowButton/>, <DeleteButton/>]}>
            <div onClick={onSelected}>{endpoint}</div>
        </List.Item>
    </>
};

export default ListItemComponent;
