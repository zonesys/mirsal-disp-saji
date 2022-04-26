import PersonIcon from "@mui/icons-material/Person";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
//battery icons
import Battery0BarIcon from "@mui/icons-material/Battery0Bar";
import Battery1BarIcon from "@mui/icons-material/Battery1Bar";
import Battery2BarIcon from "@mui/icons-material/Battery2Bar";
import Battery3BarIcon from "@mui/icons-material/Battery3Bar";
import Battery4BarIcon from "@mui/icons-material/Battery4Bar";
import Battery5BarIcon from "@mui/icons-material/Battery4Bar";
import Battery6BarIcon from "@mui/icons-material/Battery6Bar";
//signal icons
import SignalCellular0BarIcon from "@mui/icons-material/SignalCellular0Bar";
import SignalCellular1BarIcon from "@mui/icons-material/SignalCellular1Bar";
import SignalCellular2BarIcon from "@mui/icons-material/SignalCellular2Bar";
import SignalCellular3BarIcon from "@mui/icons-material/SignalCellular3Bar";
import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
const styles = (theme) => ({
  listItemText: {
    fontSize: "0.7em", //Insert your required size
  },
});
const BatteryLevel = (level) => {
  if (level == 0) {
    return <Battery0BarIcon />;
  }
  if (level >= 10 && level < 20) {
    return <Battery1BarIcon />;
  }
  if (level >= 20 && level < 30) {
    return <Battery2BarIcon />;
  }
  if (level >= 30 && level < 40) {
    return <Battery3BarIcon />;
  }
  if (level >= 40 && level < 50) {
    return <Battery4BarIcon />;
  }
  if (level >= 50 && level < 60) {
    return <Battery5BarIcon />;
  }
  if (level >= 60) {
    return <Battery6BarIcon />;
  }
};
const Signal = (level) => {
  if (level === 0) {
    return <SignalCellular0BarIcon />;
  }
  if (level === 1) {
    return <SignalCellular1BarIcon />;
  }
  if (level === 2) {
    return <SignalCellular2BarIcon />;
  }
  if (level === 3) {
    return <SignalCellular3BarIcon />;
  }
  if (level === 4) {
    return <SignalCellular4BarIcon />;
  }
};
const GroupListMember = (props) => {
  return (
    <ListItem
      className="user-list-item d-flex justify-content-between"
      style={{
        padding: "1px 20px",
      }}
    >
      <div className="d-flex align-items-center">
        <ListItemIcon>
          <PersonIcon
            style={{
              color: props.user.userActive ? "green" : "red",
            }}
          />
        </ListItemIcon>
        <span
          style={{
            fontSize: 12,

            width: 80,
            overflow:"hidden",
            "white-space": "nowrap",
          }}
        >
          {props.user.userName}
        </span>
      </div>
      <div>
        {BatteryLevel(50)}
        {Signal(2)}
      </div>
    </ListItem>
  );
};
export default GroupListMember;
