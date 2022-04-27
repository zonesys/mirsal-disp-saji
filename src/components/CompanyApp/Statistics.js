import { Col, Row } from "react-bootstrap";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AodIcon from "@mui/icons-material/Aod";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import CheckIcon from "@mui/icons-material/Check";
const Statistics = () => {
  const statistics = [
    {
      color: "bg-primary",
      name: "test",
      num: 1000,
      icon: <ApartmentIcon style={{ color: "#fff", fontSize: 40 }} />,
    },
    {
      color: "bg-warning",
      name: "test",
      num: 200,
      icon: <AodIcon style={{ color: "#fff", fontSize: 40 }} />,
    },
    {
      color: "bg-success",
      name: "test",
      num: 1000,
      icon: <AccessibilityNewIcon style={{ color: "#fff", fontSize: 40 }} />,
    },
    {
      color: "bg-info",
      name: "test",
      num: 1000,
      icon: <CheckIcon style={{ color: "#fff", fontSize: 40 }} />,
    },
  ];
  return (
    <Row className="m-0 py-2">
      {statistics.map((item, index) => (
        <Col className="py-4" xxl={3}>
          <div
            style={{
              height: "130px",
              backgroundColor: "#fff",
              borderRadius: 10,
              boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
            }}
            className="d-flex justify-content-between "
          >
            <div
              className={
                item.color + " d-flex justify-content-center align-items-center"
              }
              style={{
                height: 90,
                width: 90,
                borderRadius: 10,
                boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
                position: "relative",
                top: -20,
                left: 10,
              }}
            >
              {item.icon}
            </div>
            <div className="d-flex flex-column py-1 px-3">
              <span
                style={{
                  fontSize: 20,
                  color: "#c7c7c7",
                  textAlign: "right",
                }}
              >
                {item.name}
              </span>
              <span
                style={{
                  fontSize: 35,
                  color: "#242424",
                  textAlign: "right",
                }}
              >
                {item.num}
              </span>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Statistics;
