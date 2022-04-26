import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { signInAction } from "../redux/Actions/AccountAction";
//custome styles
const useStyles = makeStyles({
  loginBtn: {
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(0,0,0,0.5)",
    color: "white",
    height: 40,
    width: 120,
    padding: "0 30px",
  },
});
//login action
const handleLoginBTNAction = (dispatch, username, companyId) => {
  signInAction(dispatch, username, companyId);
};
const LoginForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <form id="login-form">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Username
        </label>
        <input
          type="username"
          className="form-control"
          id="username"
          placeholder="username"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="password"
        />
      </div>
      <div>
        <Button
          onClick={() => {
            const username = "saji";
            const companyId = 1;
            handleLoginBTNAction(dispatch, username, companyId);
          }}
          className={classes.loginBtn}
          variant="contained"
        >
          login
        </Button>
      </div>
    </form>
  );
};
export default LoginForm;
