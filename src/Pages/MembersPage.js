import { useState } from "react";
import GroupsTable from "../components/GroupsTable";
const pageStyle = {
  height: "100%",
  padding: "10px",
};
const toggleBox = {
  backgroundColor: "white",
  height: 200,
  width: 300,
  position:"absolute"
};
const MembersPage = () => {
  return (
    <div style={pageStyle}>
     
      <GroupsTable />
    </div>
  );
};
export default MembersPage;
