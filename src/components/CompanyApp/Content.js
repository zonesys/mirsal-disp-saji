import { Container, Col, Navbar, Nav } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "../../Pages/Company App/DashboardPage/DashboardPage";
const contentStyle = {
  backgroundColor: "#e7e7e7",
};
const Content = () => {
  return (
    <Col style={contentStyle} xl={10} className="p-0">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#pricing">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" exact element={<DashboardPage />} />
        <Route path="*" element={<div>404 page</div>} />
      </Routes>
    </Col>
  );
};
export default Content;
