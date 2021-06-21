import {Button, List, Space, Typography} from "antd";
import {useDispatch} from "react-redux";
import {usePlugin} from "flipper-plugin";
import {plugin} from "../index";
import {Mock} from "../store/model/Mock";

const {Text} = Typography;


const ListItemComponent = (props) => {
    const {cellItem} = props;
    const {isShow, endpoint, httpMethod, statusCode,queryParams} = cellItem as Mock
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
            <div onClick={onSelected}>
                <Space direction="horizontal"  size="small" wrap={true}>
                    <Text code>{statusCode ?? 200}</Text>
                    <div style={{width: 120}}><Text code>{httpMethod}</Text></div>
                    <Text>{endpoint}{ queryParams ? "?"+queryParams : ""} </Text>
                </Space>
            </div>
        </List.Item>
    </>
};

export default ListItemComponent;
