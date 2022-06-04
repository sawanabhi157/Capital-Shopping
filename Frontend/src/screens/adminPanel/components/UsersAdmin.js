import React from "react";
import "./UsersAdmin.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
function ProductsAdmin() {
  const styleIconAction = {
    fontSize: "1.1rem",
    padding: "2px",
    marginLeft: "10px",
    marginRight: "10px",
    cursor: "pointer",
  };
  return (
    <div className="Product-admin">
      <div className="product-admin-head">
        <p className="p-products-admin">Coustomers</p>
        <p className="p-products-admin-count">158</p>
      </div>
      <div className="product-admin-search">
        <div className="inner-admin-search-length-U">
          <div className="product-admin-catergory">
            <p>All</p>
          </div>
          <div className="inner-product-admin-search">
            <input
              type="text"
              className="input-product-admin"
              placeholder="Search Items"
            />
          </div>
        </div>
      </div>
      <div className="product-admin-table">
        <div className="product-admin-table-inner">
          <table>
            <tr id="header-fixed">
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th>ACTION</th>
            </tr>

            <tr>
              <td>6259c568fd552038e86f47e2</td>
              <td>Abhishek Sawan</td>
              <td>sawanabhi157@gmail.com</td>
              <td>YES</td>
              <td>
                <div className="action-admin">
                  <p className="action-delete">DELETE</p>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductsAdmin;
