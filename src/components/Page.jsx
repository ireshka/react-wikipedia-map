import styled from 'styled-components';
import { Layout, Typography } from 'antd';
import GoogleMap from './GoogleMap';

const { Header, Content, Footer: AntFooter } = Layout;
const { Link } = Typography;

const Logo = styled.h2`
  color: #ffffff;
`;

const Inner = styled(Content)`
  background: black;
  // set absolute height for google map component
  height: 1px;
  padding: 0;
`;

const Footer = styled(AntFooter)`
  padding: 12px;
  text-align: center;
`;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const Page = () => (
  <StyledLayout>
    <Header>
      <Logo>Wikipedia Map</Logo>
    </Header>
    <Inner>
      <GoogleMap />
    </Inner>
    <Footer>
      Created by <Link href="https://github.com/ireshka">@ireshka</Link> during{' '}
      <Link href="https://www.netguru.com/netguru-college">Netguru College</Link>
    </Footer>
  </StyledLayout>
);

export default Page;
