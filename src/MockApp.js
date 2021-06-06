import React, {useContext, useState} from "react";
import {Button, Layout} from "antd";
import ListComponent from "./components/listComponent";
import SidebarComponent from "./components/sidebarComponent";
import ModalComponent from "./components/modalComponent";
import {styled,} from "flipper-plugin";
import {FlipMockContext} from "./redux/createStore";
import {useDispatch} from "react-redux";
import {showModal} from "./redux/createReducer";
const {Header, Sider, Content} = Layout;

var uniqid = require("uniqid");

const MockApp = (props) => {
    const [jsonModel, setJsonModel] = useState({});
    const dispatch = useDispatch()


    const openModal = () => {
        console.log("Tıklandı")
        dispatch(showModal(true))
    };

    return (
        <Container>
            <HeaderContainer>
                <Button type="primary" onClick={openModal}>New Mock</Button>
                <ModalComponent mock={jsonModel}/>
            </HeaderContainer>
            <Container>
                <Content><ListComponent/></Content>
                <SidebarContainer/>
            </Container>
        </Container>
    );
};

const Container = styled(Layout)((props) => ({
    height: 100,
    backgroundColor: "white",
}));

const HeaderContainer = styled(Header)({
    backgroundColor: "white",
});

const SidebarContainer = styled(SidebarComponent)({
    backgroundColor: "red",
    width: 30,
});

export default MockApp;
