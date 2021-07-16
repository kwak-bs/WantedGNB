import React from "react";
import { MdSearch, MdNotifications, MdAccountCircle } from "react-icons/md";
import "../css/NavbarAside.css";

const NavbarAside = () => {
  return (
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
  );
};

export default NavbarAside;
