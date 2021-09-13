import React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Body,
  Icon,
} from "native-base";

interface IProps {
  children?: React.ReactNode;
}

const Layout = (props: IProps) => {
  return (
    <Container>
      <Header>
        <Body>
          <Title> Better Waseda Moodle for app</Title>
        </Body>
      </Header>
      <Content> {props.children} </Content>
      <Footer>
        <FooterTab>
          <Button>
            <Icon name="Home"></Icon>
          </Button>
          <Button>
            <Icon name="TimeTable"></Icon>
          </Button>
          <Button>
            <Icon name="Archive"></Icon>
          </Button>
          <Button>
            <Icon name="Settings"></Icon>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default Layout;
