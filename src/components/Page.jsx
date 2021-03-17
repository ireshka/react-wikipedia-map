import styled from 'styled-components';
import { Layout } from 'antd';

const { Header, Content, Footer: AntFooter } = Layout;

const Logo = styled.h2`
  color: #ffffff;
`;

const Inner = styled(Content)`
  background: #fff;
  min-height: 280px;
  padding: 24px;
`;

const Footer = styled(AntFooter)`
  text-align: center;
`;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

export default function Page() {
  return (
    <StyledLayout>
      <Header>
        <Logo>Wikipedia Map</Logo>
      </Header>
      <Inner>
        <div className="site-layout-content">Content</div>
      </Inner>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </StyledLayout>
  );
}
