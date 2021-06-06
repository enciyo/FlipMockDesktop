import {useState} from "react";
import {Button, Layout} from "antd";
import ListComponent from "./ListComponent";
import SidebarComponent from "./SidebarComponent";
import ModalComponent from "./ModalComponent";
import {styled, usePlugin,} from "flipper-plugin";
import {useDispatch} from "react-redux";
import {plugin} from "../index";
import {appStore} from "../store/createStore";
import {act} from "react-dom/test-utils";
import {initialMock} from "../store/model/Mock";

const {Header, Content} = Layout;

const BaseComponent = (props) => {
    const [jsonModel, setJsonModel] = useState({});
    const dispatch = useDispatch()
    const actions = usePlugin(plugin)


    const openModal = () => {
        dispatch(actions.editMockAction(initialMock()))
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

export default BaseComponent;
