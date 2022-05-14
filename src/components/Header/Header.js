import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="navigaton App">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/product">Product</NavLink>
          {/* <NavLink to="/">Home</NavLink> */}
        </nav>
      </div>
    </div>
  );
};

export default Header;
