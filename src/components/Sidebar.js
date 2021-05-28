import React, { Component } from "react";
import { Layout } from "flipper-plugin";
import { Layout as ALayout, PageHeader, Row, Col, Button } from "antd";
import ReactJson from "react-json-view";

const { Sider } = ALayout;

const scrollContainerStyle = {
  backgroundColor: "white",
  maxWidth: "50",
};

const Sidebar = (props) => {
  const { selectedItem } = props;
  return (
    <>
      {selectedItem ? (
        <Layout.ScrollContainer
          width="10%"
          height="100%"
          style={scrollContainerStyle}
        >
          <PageHeader
            title={"Endpoint: " + selectedItem.endpoint}
            extra={[
              <Button onClick={props.onBack} key="1" type="primary">
                Hide
              </Button>
            ]}
          />
          <Sider width="100%" height="100%" style={{ color: "white" }}>
            <div>
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
                src={selectedItem.dummyJsonData}
              />
            </div>
          </Sider>
        </Layout.ScrollContainer>
      ) : null}
      ;
    </>
  );
};

export default Sidebar;

