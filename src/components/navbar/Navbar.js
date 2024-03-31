import { React, memo } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoChevronDownSharp } from "react-icons/io5";
import { SlPhone } from "react-icons/sl";
import { NavbarItems } from "../../static";
import { NavLink } from "react-router-dom";
function Navbar() {
  const navLinks = NavbarItems?.map((el, index) => (
    <li key={index} className="nav_link">
      <a href="#">
        {el} <IoChevronDownSharp />
      </a>
    </li>
  ));
  return (
    <div className="navbar">
      <button className="menu">
        <CiMenuFries className="menuIcon" />
      </button>
      <ul className="nav__items">
        <li className="nav_link">
          <NavLink to="/">Home</NavLink>
        </li>
        {navLinks}
      </ul>
      <li className="nav_link">
        <a href="#">
          +123 ( 456 ) ( 7890 )
          <SlPhone />
        </a>
      </li>
    </div>
  );
}

export default memo(Navbar);
