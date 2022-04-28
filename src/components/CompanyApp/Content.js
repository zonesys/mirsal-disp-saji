import { Container, Col, Navbar, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "../../Pages/Company App/DashboardPage/DashboardPage";
import { signOutAction } from "../../redux/Actions/AccountAction";
const contentStyle = {
  backgroundColor: "#e7e7e7",
};
const Content = () => {
  const dispatch=useDispatch();
  return (
    <Col style={contentStyle} xl={10} className="p-0">
      <Navbar style={{
        boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)"

      }} bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link onClick={()=>{
              document.cookie =
                    "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                  signOutAction(dispatch);
            }}>Logout</Nav.Link>
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
