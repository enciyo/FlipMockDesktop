import React from "react";
import {Layout} from "antd";
import {createState, usePlugin, useValue,} from "flipper-plugin";
import MockApp from "./MockApp"
import {FlipMockContextProvider} from "./AppContext";

const {Header, Footer, Sider, Content} = Layout;

const plugin = (client) => {
    const rows = createState < [{}] > ([], {persist: "rows"});
    const selectedItem = createState < {} > (null, {persist: "selectedItem"});


    const sendDummyDataToClient = (uniqueId, endpoint, dummyJsonData) => {
        let data = {
            uniqueId,
            endpoint,
            dummyJsonData: JSON.parse(dummyJsonData),
            isShow: false,
        };

        let existData = findElement(data);
        console.log("sendDummyDataToClient=>" + data.dummyJsonData)
        if (existData !== undefined) {
            console.log("existData=>" + data.dummyJsonData)
            editSelectedData(data);
            return;
        }
        client.send("Add", data);
        rows.update((draft) => {
            draft.push(data);
        });
    };

    const sendAllData = (item) => {
        client.send("AddAll", {
            result: item
        })
    }

    const onSelectedItem = (item) => {
        let existDataList = rows.get();
        let newList = existDataList.map((i) => {
            return {
                ...i,
                isShow: i.uniqueId === item.uniqueId ? !item.isShow : false,
            };
        });
        rows.set(newList);
        selectedItem.set(findSelectedItem());
    };

    const onDeleteClicked = (item) => {
        let existData = findElement(item);
        if (existData !== undefined) {
            let data = [...rows.get()];
            let newData = data.filter((i) => i.uniqueId !== item.uniqueId);
            rows.set(newData);
            client.send("Remove", existData);
        }
    };

    const findElement = (item) => {
        let existDataList = rows.get();
        return existDataList.find((element) => {
            return element.uniqueId === item.uniqueId;
        });
    };

    const findSelectedItem = () => {
        let existDataList = rows.get();
        return existDataList.find((element) => {
            return element.isShow === true;
        });
    };

    const editSelectedData = (item) => {
        let data = [...rows.get()];
        let index = data.findIndex((obj) => obj.uniqueId === item.uniqueId);
        rows.update((draft) => {
            draft[index].endpoint = item.endpoint;
            draft[index].dummyJsonData = item.dummyJsonData;
            draft[index].isShow = !draft[index].isShow;
            console.log("editSelectedData =>" + draft[index])
            client.send("Update", draft[index]);
        });

        onSelectedItem(rows.get()[index]);
    };

    return {
        rows,
        selectedItem,
        sendDummyDataToClient,
        onSelectedItem,
        onDeleteClicked,
    };
};

const rootStyle = {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
};

const Component = () => {
    const instance = usePlugin(plugin);
    const rows = useValue(instance.rows);
    const selectedItem = useValue(instance.selectedItem);

    return <>
        <FlipMockContextProvider>
            <MockApp
                style={rootStyle}
                instance={instance}
                rows={rows}
                selectedItem={selectedItem}
            />
        </FlipMockContextProvider>
    </>
};

export {plugin, Component};
