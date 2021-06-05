import ListItemComponent from "./ListItemComponent";
import {useSelector} from "react-redux";
import {AppState} from "../store/model/AppState";
import {List} from 'antd'

const layoutStyle = {
    backgroundColor: "white",
};
const ListComponent = (props) => {
    const mocks = useSelector((state: AppState) => state.mocks)
    return (
        <List
            style={layoutStyle}
            split={true}
            size="large"
            dataSource={mocks}
            renderItem={(item) => <ListItemComponent cellItem={item}/>}
        />
    );
};

export default ListComponent;
