import { React, memo } from "react";
import Navbar from "../navbar/Navbar";
import SubNavbar from "../subNavbar/SubNavbar";
function Header() {
  return (
    <div className="header">
      <Navbar />
      <SubNavbar />
    </div>
  );
}

export default memo(Header);
