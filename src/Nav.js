import React from "react";

function Nav() {
  return (
    <nav className="container">
      <div className="navwrapper">
        <ul className="navigation">
          <li className="nav" id="navbar">
            <a href="#home" className="navLink">
              HOME
            </a>
          </li>
          <li className="nav">
            <a href="#about" className="navLink">
              TodoList
            </a>
          </li>
          <li className="nav">
            <a href="#contact" className="navLink">
              Time
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
