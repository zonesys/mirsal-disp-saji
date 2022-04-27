import { useState } from "react";
import { Button } from "react-bootstrap";
import { Col, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ApartmentIcon from "@mui/icons-material/Apartment";
import StorageIcon from "@mui/icons-material/Storage";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import AodIcon from "@mui/icons-material/Aod";
//styling
const SideNavStyle = {
  minHeight: "100vh",
  backgroundColor: "#0C1937",
};
const logoBox = {
  height: 70,
  color: "#fff",
  padding: "10px 5px",
  borderBottom: "solid 1px #c7c7c7",
  marginBottom: "20px",
};
const logoStyle = {
  width: 35,
};
const companyName = {
  fontSize: 20,
  fontWeight: "bold",
};

function selectOption(option, setSelectedOption) {
  setSelectedOption(option);
}
const SideNav = () => {
  //option
  const options = [
    {
      option: "Dashboard",
      url: "/",
      icon: <DashboardIcon />,
    },
    {
      option: "Server",
      url: "/servers",
      icon: <StorageIcon />,
    },
    {
      option: "Company",
      url: "/companies",
      icon: <ApartmentIcon />,
    },
    {
      option: "Group",
      url: "/groups",
      icon: <GroupIcon />,
    },
    {
      option: "User",
      url: "/users",
      icon: <PersonIcon />,
    },
    {
      option: "Device",
      url: "/devices",
      icon: <AodIcon />,
    },
  ];
  const optionStyle = {
    width: "100%",
    textAlign: "left",
    margin: "5px 0",
    border: "none",
    backgroundColor: "#0C1937",
  };
  const [selectedOption, setSelectedOption] = useState("Dashboard");
  return (
    <Col xl={2} style={SideNavStyle}>
      <div style={logoBox}>
        <img src={logo} style={logoStyle} alt={"logo"} />
        <span className="mx-2" style={companyName}>
          MIRSAL
        </span>
      </div>
      <Stack>
        {options.map((item, index) => (
          <Button
            onClick={selectOption.bind(this, item.option, setSelectedOption)}
            key={index}
            style={optionStyle}
          >
            <Link
              style={{
                display: "block",
                color: "#fff",
                textDecoration: "none",
                width: "100%",
              }}
              to={item.url}
            >
              <div className="d-flex align-item-end">
                {item.icon} <span className="px-2">{item.option}</span>
              </div>
            </Link>
          </Button>
        ))}
      </Stack>
    </Col>
  );
};

export default SideNav;
