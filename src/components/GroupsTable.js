import { Button, Pagination } from "@mui/material";
import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import MemberDialog from "./MemberDialog";
function computeSizeOfPagination(arrSize) {
  let numberOfPages = 1;
  if (arrSize > 0) {
    numberOfPages = Math.ceil(arrSize / 5);
  }
  return numberOfPages;
}
function getMembersToShow(members, currentPage) {
  const arr = [];
  const start = (currentPage - 1) * 5;
  const end = currentPage * 5 - 1;
  if (members.length < end) {
    for (let x = start; x < members.length; x++) {
      arr.push(members[x]);
    }
  } else {
    for (let x = start; x <= end; x++) {
      arr.push(members[x]);
    }
  }
  return arr;
}

const Member = (props) => {
  const handleView = () => {
    props.toggleShowDialog(true);
    props.currentMember.userName = props.user.Name;
    props.currentMember.userId = props.user.user;
    props.currentMember.userGroup = props.user.group_id;
  };
  return (
    <tr style={{
      padding:"2px"
    }}>
      <td >{props.user.user}</td>
      <td>{props.user.Name}</td>
      <td>{props.user.Group}</td>
      <td>{props.user.IP}</td>
      <td>{props.user.Port}</td>
      <td>
        <Button onClick={handleView}> Edit</Button>
      </td>
    </tr>
  );
};
const GroupsTable = () => {
  const [showDialog, toggleShowDialog] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentMember, setCurrentMember] = useState({
    userId: 0,
    userName: "",
    userGroup: "",
  });
  const [members, setMembers] = useState([]);
  //fetch members
  useEffect(() => {
    getMembers();
  }, [currentMember,showDialog]);
  const getMembers = () => {
    axios
      .get(
        " http://46.253.93.3:80/mirsal-api/public/Company/Read.php/company/1/users"
      )
      .then((res) => {
        const data = res.data.data;
        setMembers(data);
      });
  };
  //compute pages
  let numberOfPages = computeSizeOfPagination(members.length);

  //handle the change of Pagination
  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };
  //get members
  const arr = getMembersToShow(members, currentPage);

  //table header
  const tableHeader = [
    "IMEI",
    "Full Name",
    "Group",
    "IP Address",
    "Port",
    "Handle",
  ];
  return (
    <div id="company-members-table-container"  className="container-fluid">
      <MemberDialog
        showDialog={showDialog}
        toggleShowDialog={toggleShowDialog}
        currentMember={currentMember}
        setCurrentMember={setCurrentMember}
      />
      <div className="table-responsive">
        <h4>Company members</h4>
        <table id="members-table" className="table  table-hover">
          <thead>
            <tr>
              {tableHeader.map((thItem, index) => (
                <th key={index}>{thItem}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {arr.map((user, index) => (
              <Member
                key={index}
                user={user}
                currentMember={currentMember}
                showDialog={showDialog}
                toggleShowDialog={toggleShowDialog}
              />
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-end py-3">
          <Pagination
            count={numberOfPages}
            onChange={handleChangePage}
            shape="rounded"
          />
        </div>
      </div>
    </div>
  );
};
export default GroupsTable;
