/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback } from "react";
import Links from "./Links";
import Find from "./Find";
import logo from "../img/logo.svg";
import Hamburger from "hamburger-react";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = useCallback(() => setShowSidebar((value) => !value));
  return (
    <div>
      <nav className="navbar ">
        <div className="navbar-container">
          <header className="navbar-brand">
            <a href="#home">
              <img src={logo} alt="Starbucks" />
            </a>
          </header>
          <ul className="navbar-nav-left">
            <Links />
          </ul>
          <ul className="navbar-nav-right">
            <li>
              <Find />
            </li>
            <li>
              <button className="btn btn-dark-outline">Sign in</button>
            </li>
            <li>
              <button className="btn btn-dark">Join now</button>
            </li>
          </ul>
          {/* <!-- Hamburger Menu --> */}
          <div
            type="button"
            className="hamburger"
            onClick={toggleSidebar}
            id="menu-btn"
          >
            <Hamburger size={25} />
          </div>
        </div>
      </nav>

      {/* <!-- Mobile Menu --> */}
      {showSidebar ? (
        <aside className="mobile-menu hidden " id="menu">
          <ul>
            <Links />
          </ul>
          <div className="border"></div>
          <div className="mobile-menu-bottom">
            <button className="btn btn-dark-outline">Sign in</button>
            <button className="btn btn-dark">Join now</button>
            <div>
              <Find />
            </div>
          </div>
        </aside>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
