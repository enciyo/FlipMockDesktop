import {Layout, usePlugin} from "flipper-plugin";
import {Button, Layout as ALayout, PageHeader} from "antd";
import ReactJson from "react-json-view";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../store/model/AppState";
import {plugin} from "../index";


const {Sider} = ALayout;

const scrollContainerStyle = {
    padding: 12,
    width: "50%",
    height: "100%"
};

const SidebarComponent = props => {
    const dispatch = useDispatch()
    const selectItem = useSelector((state: AppState) => state.selectedItem)
    const {endpoint = "", dummyJsonData = ""} = (selectItem ? selectItem : {})
    const actions = usePlugin(plugin)


    const onHide = () => {
        dispatch(actions.hideSelectMock())
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
                    backgroundColor: "white",
                }}
                displayDataTypes={false}
                onEdit={false}
                src={JSON.parse(dummyJsonData)}
            />
        </>
    }

    return (
        <>
            {selectItem ? (
                <Layout.ScrollContainer style={scrollContainerStyle}>
                    <Header/>
                    <Sider width={"100%"} style={{color: "white"}} >
                        <PrettyJsonView/>
                    </Sider>
                </Layout.ScrollContainer>
            ) : null}
        </>
    );
}
export default SidebarComponent;

