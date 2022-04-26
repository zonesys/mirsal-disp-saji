import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import PersonIcon from "@mui/icons-material/Person";
import Collapse from "@mui/material/Collapse";
import "../App.css";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { StarBorder } from "@mui/icons-material";
import GroupListMember from "./GroupListMember";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getGroupsAction } from "../redux/Actions/ApiAction";

const SideNav = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    GetGroups();
  }, []);
  //groups state
  const [companyGroups, setCompanyGroups] = useState([]);
  //fetch company groups
  const GetGroups = () => {
    axios
      .get(
        "http://46.253.93.3:80/mirsal-api/public/Company/Read.php/company/1/devices"
      )
      .then((res) => {
        const data = res.data.data;
        const arr = [];
        for (let group in data) {
          arr.push(data[group]);
        }
        setCompanyGroups(arr);
        getGroupsAction(dispatch, arr);
      });
  };
  const GroupList = (props) => {
    const handleGroupListAction = () => {
      if (props.parentProps.currentGroup !== props.group.groupId) {
        props.parentProps.setCurrentGroup(props.group.groupId);
      } else {
        props.parentProps.setCurrentGroup(0);
      }
    };

    return (
      <ListItem className="d-flex flex-column">
        <ListItemButton
          style={{
            border: 0,
            borderRadius: "3px",
            boxShadow: "0 3px 5px 2px rgba(0,0,0,0.5)",
            color: "white",
            height: "40px",
            width: "280px",
            backgroundColor: "#1976D2",
            padding: "0 30px",
          }}
          onClick={handleGroupListAction}
        >
          <strong> {props.group.group}</strong>
        </ListItemButton>
        <Collapse
          style={{
            width: "115%",
          }}
          in={
            props.parentProps.currentGroup === props.group.groupId
              ? true
              : false
          }
          timeout="auto"
          unmountOnExit
        >
          <List component="div" disablePadding>
            {props.group.users.map((user, index) => (
              <GroupListMember key={index} user={user} />
            ))}
          </List>
        </Collapse>
      </ListItem>
    );
  };
  return (
    <div id="side-nav" className="px-2">
      <List
        id="company-groups-list"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            style={{
              backgroundColor: "#0C1937",
              color: "white",
            }}
          >
            <div className="d-flex justify-content-between align-items-center ">
              <span>GORUPS</span>
              <div className="d-flex align-items-center mb-1">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineFormCheck"
                />
                <label class="form-check-label mx-1 mt-1" for="inlineFormCheck">
                  Show All
                </label>
              </div>
            </div>
          </ListSubheader>
        }
      >
        {companyGroups.map((group, index) => (
          <GroupList key={group.groupId} parentProps={props} group={group} />
        ))}
      </List>
    </div>
  );
};
export default SideNav;
