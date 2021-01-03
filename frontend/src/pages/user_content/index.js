import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Menu, Layout, Breadcrumb } from "antd";

import * as AntIcons from "@ant-design/icons";
import { Typography, Button } from "antd";

import UserContent from "../../components/UserContent";
import SidebarAdmin from "../../components/SidebarAdmin";
import FooterDashboard from "../../components/FooterDashboard";

const { Header, Footer, Sider, Content } = Layout;

const { Title } = Typography;

function AdminUserContent() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const admin_id = localStorage.getItem("admin_id");

  return (
    <div className="App">
      <Layout>
        <Header style={{ background: "#299767", color: "#fff", padding: 15 }}>
          <Title className="tituloButton" style={{ color: "white" }} level={3}>
            Dashboard
          </Title>
        </Header>
        <Layout>
          <Sider
            className={
              sidebar ? "sidebar-menu-admin active" : "sidebar-menu-admin"
            }
          >
            <SidebarAdmin />
          </Sider>
          <Layout>
            <Content style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>
                  <Link to={`/dashboard/${admin_id}`}>Dashboard Usuarios</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <Link to="/dashboard_users">Users</Link>
                </Breadcrumb.Item>
              </Breadcrumb>
              <div
                style={{
                  background: "#299767",
                  borderRadius: "4px",
                  padding: 24,
                }}
              >
                <UserContent />
              </div>
            </Content>
            <FooterDashboard />
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default AdminUserContent;
