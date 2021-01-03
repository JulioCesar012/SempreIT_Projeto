import React, { useState } from "react";

import { Layout } from "antd";
import * as AntIcons from "@ant-design/icons";

const { Footer } = Layout;

function FooterDashboard() {
  return (
    <Footer className="footerAdmin" style={{ textAlign: "center" }}>
      Projeto Sempre IT ©2021 Feito por Julio Filho
    </Footer>
  );
}

export default FooterDashboard;
