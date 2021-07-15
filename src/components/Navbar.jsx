import React from "react";
import "../css/Navbar.css";
import { MdSearch, MdNotifications, MdAccountCircle } from "react-icons/md";

const NavBar = () => {
  return (
    <div role="navigation" className="nav_container">
      <div className="nav_container_flex">
        <nav className="navbar_main">
          <div className="navbar_name_container">
            <h1 className="navbar_name">wanted</h1>
          </div>
          <ul className="navbar_ul">
            <li className="navbar_li selected">탐색</li>
            <li className="navbar_li">커리어 성장</li>
            <li className="navbar_li">직군별 연봉</li>
            <li className="navbar_li">이력서</li>
            <li className="navbar_li">매치업</li>
            <li className="navbar_li">프리랜서</li>
          </ul>
          
          <aside className="navbar_aside">
            <ul className="aside_ul">
              <li className="aside_li">
                <button type="button" className="searchButton">
                  <MdSearch size="20" color="black" />
                </button>
              </li>
              <li className="aside_li">
                <button type="button" className="notiButton">
                  <MdNotifications size="20" color="black" />
                </button>
              </li>
              <li className="aside_li">
                <button type="button" className="accButton">
                  <MdAccountCircle size="20" color="black" />
                </button>
              </li>
              <li className="aside_li">
                <button type="button" className="svcButton">
                  기업 서비스
                </button>
              </li>
            </ul>
          </aside>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
