import React, { useState } from "react";
import SearchTabList from "./SeacrchTabList";
import NavbarAside from "./NavbarAside";
import "../css/Navbar.css";

const NavBar = () => {
  // 탭 선택 인덱스
  const [selectedIndex, setSelectedIndex] = useState(0);
  // 탭 호버 인덱스
  const [hoverIndex, setHoverIndex] = useState(0);
  // 마우스 호버 여부
  const [isHover, setIsHover] = useState(false);

  const tabClickHandler = (index) => {
    setSelectedIndex(index);
  };

  const mouseEnterHandler = (event) => {
    setIsHover(true);
    setHoverIndex(event.target.id);
  };

  const hoverOutHandler = () => {
    if (isHover) {
      setIsHover(false);
    }
  };


  const tabArray = [
    {
      tabTitle: (
        <li
          className={selectedIndex === 0 ? "navbar_li selected" : "navbar_li search"}
          onClick={() => tabClickHandler(0)}
          onMouseEnter={mouseEnterHandler}
          id={0}
        >
          탐색
        </li>
      ),
      tabListHover: <SearchTabList 
      hoverOutHandler={hoverOutHandler}
      isHover={isHover}
      />,
    },
    {
      tabTitle: (
        <li
          className={selectedIndex === 1 ? "navbar_li selected" : "navbar_li career"}
          onClick={() => tabClickHandler(1)}
          onMouseEnter={hoverOutHandler}
          id={1}
        >
          커리어 성장
        </li>
      ),
    },
    {
      tabTitle: (
        <li
          className={selectedIndex === 2 ? "navbar_li selected" : "navbar_li salary"}
          onClick={() => tabClickHandler(2)}
          onMouseEnter={hoverOutHandler}
          id={2}
        >
          직군별 연봉
        </li>
      ),
    },
    {
      tabTitle: (
        <li
          className={selectedIndex === 3 ? "navbar_li selected" : "navbar_li resume"}
          onClick={() => tabClickHandler(3)}
          onMouseEnter={hoverOutHandler}
          id={3}
        >
          이력서
        </li>
      ),
    },
    {
      tabTitle: (
        <li
          className={selectedIndex === 4 ? "navbar_li selected" : "navbar_li matchup"}
          onClick={() => tabClickHandler(4)}
          onMouseEnter={hoverOutHandler}
          id={4}
        >
          매치업
        </li>
      ),
    },
    {
      tabTitle: (
        <li
          className={selectedIndex === 5 ? "navbar_li selected" : "navbar_li freelancer"}
          onClick={() => tabClickHandler(5)}
          onMouseEnter={hoverOutHandler}
          id={5}
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
      {tabArray[hoverIndex].tabListHover}
    </>
  );
};

export default NavBar;
