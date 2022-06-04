import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BsCartCheck } from "react-icons/bs";
import { GrUserSettings } from "react-icons/gr";

function Navbar() {
  const styleIcons = {
    fontSize: "1.2em",
    marginTop: "10px",
    cursor: "pointer",
    color: "black",
  };
  return (
    <div className="main-navabar">
      <div className="inner-main-navbar">
        <div className="logo-navbar">
          <Link
            to="#"
            style={{
              color: "black",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            Capital Shopping
          </Link>
        </div>
        <div className="home-navbar">
          <Link
            to="/"
            style={{
              color: "black",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "0.8rem",
            }}
          >
            Home
          </Link>
        </div>
        <div className="men-navbar">
          <Link
            to="/mens"
            style={{
              color: "black",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "0.8rem",
            }}
          >
            Mens
          </Link>
        </div>
        <div className="women-navbar">
          <Link
            to="/womens"
            style={{
              color: "black",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "0.8rem",
            }}
          >
            Women
          </Link>
        </div>
        <div className="baby-collection-navbar">
          <Link
            to="/baby-collection"
            style={{
              color: "black",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "0.8rem",
            }}
          >
            Babay Collection
          </Link>
        </div>
        <div className="div-input-navabar">
          <input
            type="text"
            className="input-navbar"
            placeholder="Search Capital.in "
          />
          <button className="navbar-search">
            <FaSearch style={{ fontSize: "1.1rem", textAlign: "center" }} />{" "}
          </button>
        </div>
        <div className="profile-navbar">
          <Link to="/admin">
            <GrUserSettings style={styleIcons} />
          </Link>
        </div>
        <div className="cart-navabar">
          <Link to="/cart">
            <div className="cart-nav">
              <div className="icon-cart">
                <BsCartCheck style={styleIcons} />
              </div>
              <div className="count-cart">
                <p className="p-count">0</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
