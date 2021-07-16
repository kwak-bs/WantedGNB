import React, { useState } from "react";
import SearchTabList from "./SeacrchTabList";
import NavbarAside from "./NavbarAside";
import "../css/Navbar.css";

const NavBar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);

  const tabClickHandler = (index) => {
    setSelectedIndex(index);
  };

  const mouseHoverHandler = () => {
    setIsHover(!isHover);
  };

  const tabArray = [
    {
      tabTitle: (
        <li
          className={selectedIndex === 0 ? "navbar_li selected" : "navbar_li"}
          onClick={() => tabClickHandler(0)}
          onMouseEnter={mouseHoverHandler}
         // onMouseLeave={mouseHoverHandler}
        >
          탐색
        </li>
      ),
      tabListHover: <SearchTabList />,
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
    <>
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
              <NavbarAside />
            </aside>
          </nav>
        </div>
      </div>
      <div className="tabList_hover">
        {isHover && tabArray[selectedIndex].tabListHover}
      </div>
    </>
  );
};

export default NavBar;
