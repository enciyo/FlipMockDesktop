import React from "react";
import MockApp from "./MockApp"
import {Provider} from "react-redux";
import {appStore} from "./redux/createReducer";
import {usePlugin} from "flipper-plugin";
import {client} from "./redux/actionCreators";

const rootStyle = {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
};

const plugin = (client) => {
    return {client};
};

const Component = () => {
    let instance = usePlugin(plugin)
    client = instance.client
    return <ProviderComponent/>
};

const ProviderComponent = () => {
    return <>
        <Provider store={appStore}>
            <MockApp style={rootStyle}/>
        </Provider>
    </>
}
export {plugin, Component};
