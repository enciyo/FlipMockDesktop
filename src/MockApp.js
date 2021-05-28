import React, { Component, useState, useRef } from "react";
import { List, Typography, Divider, Layout, Button, Row, Col } from "antd";
import EndpointList from "./components/EndpointList";
import Sidebar from "./components/Sidebar";
import InputForm from "./components/InputForm";
import { Data } from "./Types";
import { prettyJson } from "./utils/Utils";
import {
  PluginClient,
  usePlugin,
  createState,
  useValue,
  theme,
  styled,
} from "flipper-plugin";
const { Header, Sider, Content } = Layout;

var uniqid = require("uniqid");

const MockApp = (props) => {
  const { instance, rows, selectedItem } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [jsonModel, setJsonModel] = useState({});
  const [isJsonValid, setIsJsonValid] = useState(true);

  const showModal = () => {
    clearData();
    setJsonModel({
      uniqueId: uniqid(),
      endpoint: "",
      dummyJsonData: "",
    });
    setIsModalVisible(true);
  };

  const clearData = () => {
    setJsonModel({
      uniqueId: "",
      endpoint: "",
      dummyJsonData: "",
    });
  };

  const editSelectedData = (item) => {
    let pretty = prettyJson(JSON.stringify(item.dummyJsonData));
    setJsonModel({
      uniqueId: item.uniqueId,
      endpoint: item.endpoint,
      dummyJsonData: pretty,
    });
    setIsModalVisible(true);
  };

  const onDeleteClicked = (item) => {
    instance.onDeleteClicked(item);
  };

  const handleOk = () => {
    let pretty = checkJsonIsValid(jsonModel.dummyJsonData);
    instance.sendDummyDataToClient(
      jsonModel.uniqueId,
      jsonModel.endpoint,
      pretty
    );
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleReformat = () => {
    let pretty = checkJsonIsValid(jsonModel.dummyJsonData);
    setJsonModel({ ...jsonModel, dummyJsonData: pretty });
  };

  const updateJsonData = (e) => {
    setJsonModel({ ...jsonModel, [e.target.name]: e.target.value });
  };

  const checkJsonIsValid = (json) => {
    try {
      let pretty = prettyJson(jsonModel.dummyJsonData);
      setIsJsonValid(true);
      return pretty;
    } catch (e) {
      setIsJsonValid(false);
      throw new Error("Not Valid Json");
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <Button type="primary" onClick={showModal}>
          Change sasasadassadsa
        </Button>
        <InputForm
          jsonModel={jsonModel}
          isJsonValid={isJsonValid}
          updateJsonData={updateJsonData}
          handleReformat={handleReformat}
          handleOk={handleOk}
          handleCancel={handleCancel}
          isModalVisible={isModalVisible}
          onSend={instance.sendDummyDataToClient}
        />
      </HeaderContainer>
      <Container>
        <Content>
          <EndpointList
            mockList={rows}
            onSelectedItem={instance.onSelectedItem}
            onDeleteClicked={onDeleteClicked}
            onEditClicked={editSelectedData}
          />
        </Content>
        <SidebarContainer
          onBack={() => {
            instance.onSelectedItem(selectedItem);
          }}
          selectedItem={selectedItem}
        />
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

const SidebarContainer = styled(Sidebar)({
  backgroundColor: "red",
  width: 30,
});

export default MockApp;
