import React from "react";
import {Layout} from "flipper-plugin";
import {Button, Layout as ALayout, PageHeader} from "antd";
import ReactJson from "react-json-view";
import {hideSelectMock} from "../redux/actionCreators";
import {useDispatch, useSelector} from "react-redux";
import {selected} from "../redux/createReducer";

const {Sider} = ALayout;

const scrollContainerStyle = {
    backgroundColor: "white",
    maxWidth: "50",
};

const SidebarComponent = props => {
    const dispatch = useDispatch()
    const selectedItem = useSelector(selected)
    const {endpoint = "", dummyJsonData = ""} = (selectedItem ? selectedItem : {})

    const onHide = () => {
        dispatch(hideSelectMock())
    }

    const HideButton = () => {
        return <><Button onClick={onHide} key="1" type="primary">Hide</Button></>
    }

    const Header = () => {
        return <>
            <PageHeader
                title={"Endpoint: " + endpoint}
                extra={[<HideButton/>]}/>
        </>
    }

    const PrettyJsonView = () => {
        return <>
            <ReactJson
                name={false}
                iconStyle="circle"
                style={{
                    height: "100%",
                    overflowX: "none",
                    backgroundColor: "white",
                }}
                displayDataTypes={false}
                onEdit={false}
                src={dummyJsonData}
            />
        </>
    }

    return (
        <>
            {selectedItem ? (
                <Layout.ScrollContainer style={scrollContainerStyle}>
                    <Header/>
                    <Sider width="100%" height="100%" style={{color: "white"}}>
                        <PrettyJsonView/>
                    </Sider>
                </Layout.ScrollContainer>
            ) : null}
            ;
        </>
    );
};

export default SidebarComponent;

