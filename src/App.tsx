import { useState } from "react";
import { Button, Flex, Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import Sidebar from "./components/Sidebar";
import CustomHeader from "./components/Header";
import './App.css'
import MainContent from "./components/MainContent";
import SideContent from "./components/SideContent";

const { Sider, Header, Content } = Layout;
const App = () => {
  const [colapsed, setColapsed] = useState(false)
  return <Layout>
    <Sider
      theme="light"
      trigger={null}
      collapsible
      collapsed={colapsed}
      className="sider"
      >
      <Sidebar />
      <Button
        type="text"
        icon={colapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setColapsed(!colapsed)}
        className="triger-btn" />
    </Sider>
    <Layout>
      <Header className="header">
        <CustomHeader />
      </Header>
      <Content className="content">
        <Flex gap='large'>
          <MainContent />
          <SideContent />
        </Flex>
      </Content>
    </Layout>
  </Layout>
}

export default App
