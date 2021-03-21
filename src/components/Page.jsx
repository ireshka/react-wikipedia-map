import styled from 'styled-components';
import { Layout, Typography } from 'antd';

const { Header, Content, Footer: AntFooter } = Layout;
const { Link } = Typography;

const Logo = styled.h2`
  color: #ffffff;
`;

const Inner = styled(Content)`
  background: #ffffff;
  min-height: 280px;
  padding: 24px;
`;

const Footer = styled(AntFooter)`
  padding: 12px;
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
      <Footer>
        Created by <Link href="https://github.com/ireshka">@ireshka</Link> during{' '}
        <Link href="https://www.netguru.com/netguru-college">Netguru College</Link>
      </Footer>
    </StyledLayout>
  );
}
