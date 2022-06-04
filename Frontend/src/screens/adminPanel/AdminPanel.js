import React from "react";
import "./AdminPanel.css";
import AdminNavbar from "./components/AdminNavbar";
import { Link, Outlet } from "react-router-dom";
import { FaUsers, FaCartArrowDown } from "react-icons/fa";
function AdminPanel() {
  const stylesideIcon = {
    fontSize: "1.2rem",
    marginRight: "10px",
  };
  return (
    <div className="Admin-panel-screen">
      <div className="admin-panel-left">
        <div className="website-admin-name">
          <p className="p1-admin">CAPITAL SHOPPING</p>
        </div>
        <div className="links-admin">
          <Link to="products">
            <div className="admin-products ad">
              <FaCartArrowDown style={stylesideIcon} />
              <p className="p-admin">Products</p>
            </div>
          </Link>
          <Link to="orders">
            <div className="admin-order ad">
              <FaCartArrowDown style={stylesideIcon} />
              <p className="p-admin">Orders</p>
            </div>
          </Link>
          <Link to="users">
            <div className="admin-coustomer ad">
              <FaUsers style={stylesideIcon} />
              <p className="p-admin"> Coustomers</p>
            </div>
          </Link>
        </div>
        <div className="admin-footer">
          <p className="p-footer-admin">All rights reseved</p>
        </div>
      </div>
      <div className="admin-panel-right">
        <div className="navbar-admin-panel">
          <AdminNavbar />
        </div>

        <div className="main-admin-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
