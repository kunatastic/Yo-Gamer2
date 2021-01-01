import React from "react";
import "./nav.css";
function Nav() {
  return (
    <>
      <div className="navbar">
        <div className="container flex">
          <h1 className="logo">Yo-Gamer.</h1>
          <nav>
            <ul>
              <li>
                <a href="index.htm">Home</a>
              </li>
              <li>
                <a href="feature.htm">Feature</a>
              </li>
              <li>
                <a href="docs.htm">Docs</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Nav;
