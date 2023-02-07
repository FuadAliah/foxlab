import React, { useState } from "react";
import { Link } from "react-router-dom";
import Skelton from "../Skelton/Skelton";
import useFetch from "../UseFetch/useFetch";

import "./Menu.scss";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { data: menu, isLoad } = useFetch("https://firebasestorage.googleapis.com/v0/b/pocket-design-fbec1.appspot.com/o/menu-icons.json?alt=media&token=4e045800-ebd4-498e-9d6a-cd7b5c775b29");

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`side ${isOpen ? "open" : ""}`}>
        <div className="menu">
          <ul className="items navbar-nav">
            {menu &&
              menu.map((nav, idx) => (
                <li className="item tooltip-right" key={idx} data-tip={nav.name.split("-").join(" ").toUpperCase()}>
                  <Link to={`/${nav.name}`} className="site-logo">
                    <img className="logo-icon" src={nav.img} alt={nav.name.split("-").join(" ").toUpperCase()} />
                  </Link>
                </li>
              ))}
          </ul>
          {!isLoad && Array.from("f".repeat(15)).map((item, idx) => <Skelton type="menu" element="circle" key={idx} />)}
        </div>
        <div className="pull-tab" onClick={handleMenu}>
          <i className={`arrow ${!isOpen ? "closed" : ""}`}></i>
        </div>
      </div>
    </>
  );
};

export default Menu;
