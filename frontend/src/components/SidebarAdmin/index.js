import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Menu } from "antd";
import * as AntIcons from "@ant-design/icons";

import { Button } from "antd";

function SidebarAdmin() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const admin_id = localStorage.getItem("admin_id");

  return (
    <Menu
      mode="inline"
      theme="dark"
      style={{ background: "#299767", color: "#fff", height: "100%" }}
    >
      <Menu.Item key="dashboard" className="button_menu">
        <Link to={`/dashboard/${admin_id}`}>
          <AntIcons.DashboardOutlined />
          Home
        </Link>
      </Menu.Item>

      <Menu.Item key="usuarios" className="button_menu">
        <Link to="/dashboard_users">
          <AntIcons.UserOutlined />
          Usuários
        </Link>
      </Menu.Item>

      <Menu.Item key="logout" className="button_menu">
        <Link to="/logout">
          <AntIcons.LogoutOutlined />
          Logout
        </Link>
      </Menu.Item>
    </Menu>
  );
}

export default SidebarAdmin;
