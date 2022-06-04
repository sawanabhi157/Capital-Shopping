import React from "react";
import "./AdminNavbar.css";
// import abhipic from "../../../assests/pexels-klaus-nielsen-6303682.jpg";
import { FaAngleDown } from "react-icons/fa";
function AdminNavbar() {
  const stylenavicon = {
    marginTop: "15px",
    marginLeft: "10px",
    cursor: "pointer",
  };
  return (
    <div className="admin-navbar">
      <div className="inner-admin-navbar">
        <div className="inner-admin-left-nav">
          <img
            src="https://res.cloudinary.com/iiitm/image/upload/v1653399855/pexels-klaus-nielsen-6303682_wktan0.jpg"
            alt=""
            className="inner-admin-left-nav-img "
          />
        </div>
        <div className="inner-admin-right-nav">
          <div className="rt-admin">
            <p className="p-rt-admin">Abhishek Sawan</p>
            <FaAngleDown style={stylenavicon} />
          </div>
          <div className="rb-admin">
            <p className="p-rb-admin">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminNavbar;
