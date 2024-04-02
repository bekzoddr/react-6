import { React, memo } from "react";
import logo from "../../assets/images/logo.svg";
import logoText from "../../assets/images/logoText.svg";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import person from "../../assets/images/person.svg";
import heart from "../../assets/images/heart.svg";
function SubNavbar() {
  return (
    <div className="sub__navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <img src={logoText} alt="logo" />
      </div>
      <div className="search">
        <input type="text" placeholder="Search For items..." />
        <select id="mySelect">
          <option value="1">All Categories</option>
        </select>
        <button>
          <IoSearchOutline />
        </button>
      </div>
      <div className="icons">
        <div className="task">
          <img src={person} alt="" />
          <h4>Account</h4>
        </div>
        <div className="task">
          <img src={heart} alt="" />
          <h4>Wishlist</h4>
        </div>
        <div className="task">
          <IoCartOutline />
          <h4>Cart</h4>
        </div>
      </div>
    </div>
  );
}

export default memo(SubNavbar);
