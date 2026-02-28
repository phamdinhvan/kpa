import { Outlet } from 'react-router-dom';
import { ConfigProvider, Layout, Menu } from 'antd';
import { HomeOutlined, LoginOutlined, CarOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { appStore } from '../store/appStore';

const { Header, Sider, Content } = Layout;

const menuItems = [
  { key: '/', icon: <HomeOutlined />, label: <Link to="/">Home</Link> },
  { key: '/login', icon: <LoginOutlined />, label: <Link to="/login">Login</Link> },
  { key: '/drivers', icon: <CarOutlined />, label: <Link to="/drivers">Drivers</Link> },
  { key: '/jobs', icon: <UnorderedListOutlined />, label: <Link to="/jobs">Jobs</Link> },
];

export function AppLayout() {
  const sidebarCollapsed = appStore((state) => state.sidebarCollapsed);
  const toggleSidebar = appStore((state) => state.toggleSidebar);

  return (
    <ConfigProvider>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={sidebarCollapsed}
          onCollapse={toggleSidebar}
          theme="light"
        >
          <div
            style={{
              height: 64,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: sidebarCollapsed ? 14 : 18,
            }}
          >
            {sidebarCollapsed ? 'KPA' : 'KPA Platform'}
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={['/']}
            items={menuItems}
            style={{ height: 'calc(100vh - 64px)', borderRight: 0 }}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: '0 24px',
              background: '#fff',
              boxShadow: '0 1px 4px rgba(0,21,41,.08)',
            }}
          >
            <span style={{ fontSize: 16, fontWeight: 500 }}>KPA Local Services</span>
          </Header>
          <Content
            style={{
              margin: '24px',
              padding: 24,
              background: '#fff',
              borderRadius: 8,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}
