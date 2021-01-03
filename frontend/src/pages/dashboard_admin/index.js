import React, { useState } from "react";

import { Link, useParams } from "react-router-dom";

import { Menu, Layout, Breadcrumb } from "antd";

import * as AntIcons from "@ant-design/icons";
import { Typography, Button } from "antd";

import DashboardAdmin from "../../components/DashboardAdmin";
import SidebarAdmin from "../../components/SidebarAdmin";
import FooterDashboard from "../../components/FooterDashboard";

const { Header, Footer, Sider, Content } = Layout;

const { Title } = Typography;

function PanelAdmin() {
  const { user_id } = useParams();

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
          <Sider>
            <SidebarAdmin />
          </Sider>
          <Layout>
            <Content style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>
                  <Link to={`/dashboard/${admin_id}`}>Dashboard Admin</Link>
                </Breadcrumb.Item>
              </Breadcrumb>
              <div
                style={{
                  background: "#299767",
                  borderRadius: "4px",
                  padding: 24,
                }}
              >
                <DashboardAdmin admin_id={admin_id} />
              </div>
            </Content>
            <FooterDashboard />
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default PanelAdmin;
