import React from "react";
import ListItemComponent from "./listItemComponent";
import {useSelector} from "react-redux";
import {mocks} from "../redux/createReducer";

const layoutStyle = {
    backgroundColor: "white",
};
const ListComponent = props => {
    const mocks = useSelector(mocks)
    return (
        <ListItemComponent
            style={layoutStyle}
            split={true}
            size="large"
            dataSource={mocks}
            renderItem={(item) => <ListItemComponent cellItem={item}/>}
        />
    );
};

export default ListComponent;
