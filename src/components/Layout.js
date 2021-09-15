import React from "react";
import "antd/dist/antd.css";
import "./Layout.css";
import { Layout, Menu, Breadcrumb } from "antd";
import { QuestionCircleOutlined, UserOutlined } from "@ant-design/icons";
import Activity from "./Activity";
import { Route } from "react-router";
import { Link } from "react-router-dom";

const { Header, Content, Sider } = Layout;
function Layouts() {
  return (
    <div>
      <Layout>
        <Header className="header">
          <h1>
            User for Business
            <div className="headIcons">
              <QuestionCircleOutlined />
              <UserOutlined style={{ marginLeft: "30px" }} />
            </div>
          </h1>
        </Header>

        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              className="menulist"
              style={{ height: "100%", borderRight: 0 }}
            >
              <h1 style={{ margin: "40px 0 20px 20px" }}>ACCOUNT</h1>
              <Link to="/activity">
                <Menu.Item
                  key="1"
                  style={{ padding: "0 25px", color: "black" }}
                >
                  Activity
                </Menu.Item>
              </Link>
              <Menu.Item key="2">People</Menu.Item>
              <Menu.Item key="3">Billing</Menu.Item>
              <Menu.Item key="4">Settings</Menu.Item>

              <h1 style={{ margin: "30px 0 20px 20px" }}>PERMISSIONS</h1>

              <Menu.Item key="5">Uber Travel</Menu.Item>
              <Menu.Item key="6">Uber Central</Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Route exact path="/">
                <h1 className="welcome">Welcome !</h1>
              </Route>

              <Route path="/activity" component={Activity} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default Layouts;
