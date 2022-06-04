import React from "react";
import "./ProductsAdmin.css";
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
        <p className="p-products-admin">ODERS</p>
        <p className="p-products-admin-count">98</p>
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
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
            </tr>
            <tr>
              <td>6259c568fd552038e86f47e2</td>
              <td>Admin</td>
              <td>20-05-2022</td>
              <td>40089</td>
              <td>
                <p className="action-paid">NO</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductsAdmin;
