import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./navBar.css";
import logo from "../../images/favpng_logo-wind-wave.png";

function NavBar() {
  const [bar, setBar] = useState(true);

  const state = useSelector((state) => state.handleCart);
  console.log(state);

  const cantidad = state.length;

  const openMenu = () => {
    setBar(!bar);
    console.log(bar);
  };

  return (
    <>
      <div className="navContainer">
        <Link to={"/"}>
          {" "}
          <img src={logo} alt="" />
        </Link>
        <div>
          <ul>
            <Link to={"/"}>
              {" "}
              <li>HOME</li>{" "}
            </Link>
            <Link to={"About"}>
              {" "}
              <li>ABOUT</li>{" "}
            </Link>
            <Link to={"Services"}>
              {" "}
              <li>SERVICES</li>{" "}
            </Link>
            <Link to={"Shop"}>
              {" "}
              <li>SHOP</li>{" "}
            </Link>
            <Link to={"Contact"}>
              {" "}
              <li>CONTACT</li>{" "}
            </Link>
            <Link to={"Cart"}>
              <i className="fa-brands fa-opencart qty"></i>({cantidad})
            </Link>
          </ul>
        </div>
      </div>
      <div className="navContainerResposive">
        <div className="barIcon">
          <i onClick={openMenu} className="fa-solid fa-bars menubar"></i>
        </div>
        <div className={bar ? "linksContainer" : "linksContainerOpen"}>
          <ul>
            <Link to={"/"}>
              {" "}
              <li onClick={openMenu}>HOME</li>{" "}
            </Link>
            <Link to={"About"}>
              {" "}
              <li onClick={openMenu}>ABOUT</li>{" "}
            </Link>
            <Link to={"Services"}>
              {" "}
              <li onClick={openMenu}>SERVICES</li>{" "}
            </Link>
            <Link to={"Shop"}>
              {" "}
              <li onClick={openMenu}>SHOP</li>{" "}
            </Link>
            <Link to={"Contact"}>
              {" "}
              <li onClick={openMenu}>CONTACT</li>{" "}
            </Link>
            <Link to={"Cart"}>
              <i onClick={openMenu} className="fa-brands fa-opencart qty"></i>(
              {cantidad})
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
