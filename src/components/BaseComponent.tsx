import {useState} from "react";
import {Button, Col, Layout, Row, Switch} from "antd";
import ListComponent from "./ListComponent";
import SidebarComponent from "./SidebarComponent";
import ModalComponent from "./ModalComponent";
import {styled, usePlugin,} from "flipper-plugin";
import {useDispatch, useSelector} from "react-redux";
import {plugin} from "../index";
import {initialMock} from "../store/model/Mock";
import {AppState} from "../store/model/AppState";

const {Header, Content} = Layout;

const SCol = styled(Col)({
    margin: 12,
    span: 4,
});

const BaseComponent = (props) => {
    const [jsonModel, setJsonModel] = useState({});
    const isEnable = useSelector((state:AppState) => state.config.isMockEnable)
    const dispatch = useDispatch()
    const actions = usePlugin(plugin)


    const openModal = () => {
        dispatch(actions.editMockAction(initialMock()))
    };



    return <>
        <Container>
            <HeaderContainer>
                <Row>
                    <SCol>
                        <Button type="primary" onClick={openModal}>New Mock</Button>
                    </SCol>
                    <SCol>
                        <Row>
                            <Col>
                                <Switch defaultChecked={isEnable}  checkedChildren="Enable" unCheckedChildren="Disable" onChange={(checked, event) => {
                                    dispatch(actions.changeMockIsEnable(checked))
                                }}/>
                            </Col>
                        </Row>
                    </SCol>
                </Row>
                <ModalComponent mock={jsonModel}/>
            </HeaderContainer>
            <Container>
                <Content><ListComponent/></Content>
                <SidebarContainer/>
            </Container>
        </Container>
    </>
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
