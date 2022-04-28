import { Button, Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import Content from "../../components/CompanyApp/Content";
import SideNav from "../../components/CompanyApp/SideNav";
const IndexPageStyle = {
  minHeight: "100vh",
};

const IndexPage = () => {
  return (
    <BrowserRouter>
      <Container style={IndexPageStyle} fluid>
        <Row>
          <SideNav />
          <Content />
        </Row>
      </Container>
    </BrowserRouter>
  );
};
export default IndexPage;
