import {Button, List} from "antd";
import {useDispatch} from "react-redux";
import {usePlugin} from "flipper-plugin";
import {plugin} from "../index";



const ListItemComponent = (props) => {
    const {cellItem} = props;
    const {isShow, endpoint} = cellItem
    const dispatch = useDispatch()
    const actions = usePlugin(plugin)

    const onDelete = () => {
        dispatch(actions.deleteMockAction(cellItem))
    }
    const onEdit = () => {
        dispatch(actions.editMockAction(cellItem))
    }
    const onSelected = () => {
        dispatch(actions.selectMock(cellItem))
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
            actions={[<EditButton/>, <ShowButton/>, <DeleteButton/>]}>
            <div onClick={onSelected}>{endpoint}</div>
        </List.Item>
    </>
};

export default ListItemComponent;
