import React, { useState } from "react";
import { Link } from "react-router";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen ] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  }

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen)
  };

    const menuClass = "menu";
    const activeMenuClass = "menu selected";
    
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "32px" }} />
      <div className="menus">
        <ul>
          <li>
           <Link style={{textDecoration:"none"}}
           to={"/"}
           onClick={className={selectedMenu===0 ? active}}>
           </Link>
          </li>
          <li>
            <p>Orders</p>
          </li>
          <li>
            <p>Holdings</p>
          </li>
          <li>
            <p>Positions</p>
          </li>
          <li>
            <p>Funds</p>
          </li>
          <li>
            <p>Apps</p>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;