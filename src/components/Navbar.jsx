import React, { useState } from "react";
import "../css/Navbar.css";
import { MdSearch, MdNotifications, MdAccountCircle } from "react-icons/md";

const NavBar = () => {
  const tabClickHandler = (index) => {
    setSelectedIndex(index);
    console.log(index + " 클릭됨");
  };
  const [selectedIndex, setSelectedIndex] = useState(0);

  const tabArray = [
    {
      tabTitle: (
        <li
          className={selectedIndex === 0 ? "navbar_li selected" : "navbar_li"}
          onClick={() => tabClickHandler(0)}
        >
          탐색
        </li>
      ),
    },
    {
      tabTitle: (
        <li
          className={selectedIndex === 1 ? "navbar_li selected" : "navbar_li"}
          onClick={() => tabClickHandler(1)}
        >
          커리어 성장
        </li>
      ),
    },
    {
      tabTitle: (
        <li
          className={selectedIndex === 2 ? "navbar_li selected" : "navbar_li"}
          onClick={() => tabClickHandler(2)}
        >
          직군별 연봉
        </li>
      ),
    },
    {
      tabTitle: (
        <li
          className={selectedIndex === 3 ? "navbar_li selected" : "navbar_li"}
          onClick={() => tabClickHandler(3)}
        >
          이력서
        </li>
      ),
    },
    {
      tabTitle: (
        <li
          className={selectedIndex === 4 ? "navbar_li selected" : "navbar_li"}
          onClick={() => tabClickHandler(4)}
        >
          매치업
        </li>
      ),
    },
    {
      tabTitle: (
        <li
          className={selectedIndex === 5 ? "navbar_li selected" : "navbar_li"}
          onClick={() => tabClickHandler(5)}
        >
          프리랜서
        </li>
      ),
    },
  ];
  return (
    <div role="navigation" className="nav_container">
      <div className="nav_container_flex">
        <nav className="navbar_main">
          <div className="navbar_name_container">
            <h1 className="navbar_name">wanted</h1>
          </div>
          <ul className="navbar_ul">
            {tabArray.map((section, index) => {
              return section.tabTitle;
            })}
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
