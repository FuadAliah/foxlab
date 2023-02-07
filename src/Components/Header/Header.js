import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../Assets/logo.svg";
// import Bookmarks from "../../Assets/bookmark.svg";
import User from "../../Assets/user.png";
import Search from "../../Assets/search.svg";
// import useSearch from "../useSearch/useSearch";

import "./Header.scss";

const Header = () => {
  const [position, setPosition] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 0 ? setPosition(true) : setPosition(false);
    });
  }, [position]);

  const handleSubmit = e => e.preventDefault();

  return (
    <nav className={`navbar navbar-light bg-white ${position ? "sticky" : ""}`}>
      <div className="container-fluid">
        <div className="head">
          <Link to="/" className="navbar-brand brand">
            <img className="logo" src={Logo} alt="Foxlab" />
          </Link>
          <form onSubmit={handleSubmit}>
            <img src={Search} className="search-icon" alt="Search" />
            <input className="search form-control" type="search" placeholder="Search on foxlab" aria-label="Search" />
          </form>
          <div className="user-section">
            {/* <a href="#f" className="d-flex">
              <img className="bookmarks" src={Bookmarks} alt="Bookmarks" />
            </a> */}
            <Link to="/new" className="new-link">
              Submit a product
            </Link>
            <a href="#f" className="profile-img">
              <img className="user-profile" src={User} alt="profile" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
