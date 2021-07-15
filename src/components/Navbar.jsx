import React from "react";
import "../css/Navbar.css";

const NavBar = () => {
  return (
    <div role="navigation" className="nav_container">
      <div className="nav_container_flex">
        <nav className="navbar_main">
          <div className="navbar_name_container">
            <h1 className="navbar_name">wanted</h1>
          </div>
          <ul className="navbar_ul">
            <li className="navbar_li">탐색</li>
            <li className="navbar_li">커리어 성장</li>
            <li className="navbar_li">직군별 연봉</li>
            <li className="navbar_li">이력서</li>
            <li className="navbar_li">매치업</li>
            <li className="navbar_li">프리랜서</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
