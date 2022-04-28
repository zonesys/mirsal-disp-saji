import {  useSelector } from "react-redux";
import "./App.css";
import IndexPage from "./Pages/Company App/IndexPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/Login";
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function App() {
  const account = useSelector((state) => state.account);
  let user = getCookie("user");
  if (user !== "") {
    user = JSON.parse(user);
    account.user = {
      ...user,
    };
  }
  return (
    <div className="App">
      {account.user.isLogged ? (
        account.user.isAdmin ? (
          //replace here the dashboard
          <IndexPage/>
        ) : (
          <HomePage />
        )
      ) : (
        <LoginPage />
      )}
    </div>
  );
}
export default App;
