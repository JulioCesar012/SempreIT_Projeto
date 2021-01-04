import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { Menu } from "antd";
import * as AntIcons from "@ant-design/icons";

import { Button } from "antd";

function SidebarDashboard() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const user_id = localStorage.getItem("user_id");

  const history = useHistory();

  function handleLogout() {
   localStorage.clear();

   history.push('/');
 }
  
  return (
    <Menu
      mode="inline"
      theme="dark"
      style={{ background: "#299767", color: "#fff", height: "100%" }}
    >
      <Menu.Item key="Dashboard" className="button_menu">
        <Link to={`/dashboard_home/${user_id}`}>
          <AntIcons.DashboardOutlined />
          Home
        </Link>
      </Menu.Item>

      <Menu.Item key="reservas" className="button_menu">
        <Link to="/" onClick={handleLogout}>
          <AntIcons.LogoutOutlined />
          Logout
        </Link>
      </Menu.Item>
    </Menu>
  );
}

export default SidebarDashboard;
