import "../App.css";
import LoginForm from "../components/LoginForm";
import logo from "../img/logo.png";

const LoginPage = () => {
  return (
    <div
      id="login-page"
      className="d-flex justify-content-center align-items-center"
    >
      <div id="login-form-container" className="d-flex flex-column  p-3">
        <div id="container-header" className="d-flex align-items-center">
          <img id="logo" src={logo} alt="logo" />

          <h5 id="company-name">
            <strong>MIRSAL COMPANY</strong>
          </h5>
        </div>
        <div id="container-body" className="py-3">
          <LoginForm />
        </div>
        <div id="container-footer">
          <h6>forget password ?</h6>
          <a href="#">connect us</a>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
