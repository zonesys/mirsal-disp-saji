import { useDispatch, useSelector } from "react-redux";
import { signInAction } from "../redux/Actions/AccountAction";
import { login } from "../API/Company/Read";
import md5 from "md5";
import { ErrorMessage, useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

//login action
const handleLoginBTNAction = (dispatch, username, password, showAlert) => {
  //signInAction(dispatch, username, companyId);
  login(username, md5(password)).then((res) => {
    let response = res.data.data;

    if (response.access === "approved") {
      signInAction(
        dispatch,
        username,
        response.companyId,
        true,
        response.isAdmin === "yes" ? true : false
      );
      setCookie(
        "user",
        JSON.stringify({
          username: username,
          companyId: response.companyId,
          isLogged: true,
          isAdmin: response.isAdmin === "yes" ? true : false,
        })
      );
    } else {
      showAlert(true);
    }
  });
};
function setCookie(cname, cvalue) {
  const d = new Date();
  d.setTime(d.getTime() + 12 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
const LoginForm = () => {
  const dispatch = useDispatch();
  const [showMsg, setShowMsg] = useState(false);
  const loginSchema = Yup.object().shape({
    username: Yup.string().required("Required"),

    password: Yup.string()

      .min(4, "password must be at least 6 digits!")
      .required("Required"),
  });
  return (
    <>
      <div
        className={
          showMsg ? "py-2 alert alert-danger" : "alert alert-danger d-none"
        }
        role="alert"
      >
        access denied
      </div>
      <Formik
        validationSchema={loginSchema}
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values) => {
          setShowMsg(false);
          handleLoginBTNAction(
            dispatch,
            values.username,
            values.password,
            setShowMsg
          );
        }}
      >
        {({ errors, touched, isValidating, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <div className="py-1">
              <label htmlFor="username" className="form-label">
                Username
              </label>

              <Field
                id="username"
                name="username"
                type="text"
                onChange={handleChange}
                className="form-control"
              />
              {errors.username && touched.username ? (
                <div style={{ color: "red" }}>{errors.username}</div>
              ) : null}
            </div>
            <div className="py-1">
              <label htmlFor="password" className="form-label">
                Password
              </label>

              <Field
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                className="form-control"
              />
              {errors.password && touched.password ? (
                <div style={{ color: "red" }}>{errors.password}</div>
              ) : null}
            </div>

            <div className="py-2">
              <button
                style={{
                  width: "100%",
                }}
                className="btn btn-primary"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};
export default LoginForm;
