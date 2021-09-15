import React from "react";
import "./Activity.css";
import { Menu } from "antd";

function Activity() {
  return (
    <div className="activity">
      <p>Activity</p>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        className="activity-head"
      >
        <Menu.Item key="1">All</Menu.Item>
        <Menu.Item key="2">Unresolved</Menu.Item>
      </Menu>
      <hr />
    </div>
  );
}

export default Activity;
