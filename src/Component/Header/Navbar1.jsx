import React from "react";

import logo from "../../logo.png";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";

function Navbar1() {
  return (
    <>
      <nav className="header">
        <img src={logo} alt="logo" />
        <div className="content">
        <Link to="/">Home</Link>
          <Link to="/tv">TV Shows</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/recentlyAdded">Recently Added</Link>
          <Link to="/MyList">My List</Link>
        </div>
        <ImSearch/>
      </nav>
    </>
  );
}

export default Navbar1;
