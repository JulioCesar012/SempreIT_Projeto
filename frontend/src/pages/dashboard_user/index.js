import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Layout, Breadcrumb } from "antd";

import * as AntIcons from "@ant-design/icons";
import { Typography } from "antd";

import DashboardUser from "../../components/DashboardUser";
import SidebarUser from "../../components/SidebarUser";
import FooterDashboard from "../../components/FooterDashboard";

const { Header, Footer, Sider, Content } = Layout;

const { Title } = Typography;

function PanelUser() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const user_id = localStorage.getItem("user_id");

  return (
    <div className="App">
      <Layout>
        <Header style={{ background: "#299767", color: "#fff", padding: 15 }}>
          <Title style={{ color: "white" }} level={3}>
            Dashboard
          </Title>
        </Header>
        <Layout>
          <Sider>
            <SidebarUser />
          </Sider>
          <Layout>
            <Content style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <Link to={`/dashboard_user/${user_id}`}>Dashboard</Link>
                </Breadcrumb.Item>
              </Breadcrumb>
              <div
                style={{
                  background: "#299767",
                  borderRadius: "4px",
                  padding: 24,
                }}
              >
                <DashboardUser user_id={user_id} />
              </div>
            </Content>
            <FooterDashboard />
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default PanelUser;
