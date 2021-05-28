import React, { Component, useState } from "react";
import { Row, Col, Button, Input, Modal } from "antd";
import { styled } from "flipper-plugin";
import "../utils/Utils";
const SCol = styled(Col)({
  margin: 12,
  span: 4,
});

const SButton = styled(Button)({
  shape: "round",
  size: "large",
});

const { TextArea } = Input;

const InputForm = (props) => {
  const { isModalVisible, jsonModel, isJsonValid } = props;

  return (
    <>
      <Modal
        width={1000}
        title="Enter New Data"
        visible={isModalVisible}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
      >
        <SCol>
          <Input
            type="text"
            centered
            name="endpoint"
            value={jsonModel.endpoint}
            onChange={(e) => props.updateJsonData(e)}
            placeholder="Enter Endpoint"
          />
        </SCol>
        <SCol>
          <TextArea
            rows={6}
            name="dummyJsonData"
            value={jsonModel.dummyJsonData}
            onChange={(e) => props.updateJsonData(e)}
            placeholder="Enter Dummy Json Data"
          />
          <Button
            style={{
              margin: 4,
            }}
            onClick={props.handleReformat}
          >
            Pretty
          </Button>
          {isJsonValid ? null : <h1> Json is not valid </h1>}
        </SCol>
      </Modal>
    </>
  );
};

export default InputForm;
