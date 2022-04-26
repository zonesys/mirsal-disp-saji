import { useSelector } from "react-redux";
import "./App.css";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/Login";
function App() {
  const account = useSelector((state) => state.account);
  return (
    <div className="App">
      {account.user.isLogged ? <HomePage /> : <LoginPage />}
    </div>
  );
}
export default App;
