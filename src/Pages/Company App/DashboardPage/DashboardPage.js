import { Col, Container, Row } from "react-bootstrap";
import Statistics from "../../../components/CompanyApp/Statistics";
import CompanyTable from "../../../components/CompanyApp/CompanyTable";
const DashboardPage = () => {

  return (
    <Container fluid>
      <Statistics />
      <Row className="px-4">
        <Col
          style={{
            height: "400px",
            backgroundColor: "#fff",
            borderRadius: 15,
            boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
          }}
        >
          <CompanyTable />
        </Col>
      </Row>
    </Container>
  );
};
export default DashboardPage;
