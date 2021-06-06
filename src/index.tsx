import BaseComponent from "./components/BaseComponent"
import {Provider} from "react-redux";
import {appStore} from "./store/createStore";
import Types from "./store/model/Types";
import {Mock} from "./store/model/Mock";

const rootStyle = {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
};

function plugin(client) {

    const addMockAction = (mock: Mock) => {
        return async (dispatch,getState) => {
            client.send(Types.ADD, mock)
            dispatch({
                type: Types.ADD,
                payload: mock
            })
        }
    }


    const deleteMockAction = (mock: Mock) => {
        return async (dispatch, getState) => {
            client.send(Types.DELETE, mock)
            dispatch({
                type: Types.DELETE,
                payload: mock
            })
        }
    }

    const updateMockAction = (mock: Mock) => {
        return async (dispatch, getState) => {
            client.send(Types.UPDATE, mock)
            dispatch({
                type: Types.UPDATE,
                payload: mock
            })
        }
    }

    const editMockAction = (mock:Mock) => {
        return async (dispatch, getState) => {
            dispatch({
                type: Types.EDIT,
                payload: mock
            })
        }
    }


    const addAllMockAction = (mocks: [Mock]) => {
        return async (dispatch, getState) => {
            client.send(Types.ADD_ALL, mocks)
            dispatch({
                type: Types.UPDATE,
                payload: mocks
            })
        }
    }

    const selectMock = (mock: Mock) => {
        return {
            type: Types.SELECT,
            payload: mock
        }
    }

    const updateModalVisibility = (isVisible: boolean) => {
        return {
            type: Types.SHOW_MODAL,
            payload: isVisible
        }
    }

    const hideSelectMock = () => {
        return {
            type: Types.SELECT,
            payload: {
                uniqueId: "-1"
            } as Mock
        }
    }


    return {
        addMockAction,
        deleteMockAction,
        updateMockAction,
        addAllMockAction,
        selectMock,
        updateModalVisibility,
        hideSelectMock,
        editMockAction
    };
}

const Component = () => {
    return <ProviderComponent/>
};

const ProviderComponent = () => {
    return <>
        <Provider store={appStore}>
            <BaseComponent style={rootStyle}/>
        </Provider>
    </>
}
export {plugin, Component};

