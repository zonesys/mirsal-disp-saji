import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageNavBar from "../components/HomePageNavBar";
import SideNav from "../components/SideNav";
import DispatcherPage from "./DispatcherPage";
import MembersPage from "./MembersPage";

const HomePage = () => {
  const [currentGroup, setCurrentGroup] = useState(0);

  return (
    <BrowserRouter>
      <div id="home-page" className="container-fluid d-flex flex-column p-0">
        <HomePageNavBar />
        <div
          style={{
            height: "100%",
            position: "relative",
          }}
          className="row m-0"
        >
          {/*side nav */}
          <div id="side-nav" className="col-lg-2 p-0">
            <SideNav
              currentGroup={currentGroup}
              setCurrentGroup={setCurrentGroup}
            />
          </div>
          {/**main content */}
          <div className="col-lg-10 p-0" >
            <Routes>
              <Route path="/" element={<DispatcherPage />} />
              <Route path="/members" element={<MembersPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default HomePage;
