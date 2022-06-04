import React from "react";
import "./MyOrder.css";
import Navbar from "./Navbar";
import DiscountBanner from "./DiscountBanner";
import Footer from "./Footer";
function MyOrder() {
  return (
    <>
      <Navbar />
      <DiscountBanner />

      <div className="main-my-order">
        <div className="inner-my-order">
          <div className="title-my-order">
            <h2>My Orders</h2>
          </div>
          <div className="table-container">
            <table className="my-oder-table">
              <tr id="header-fixed">
                <th className="th-myorder">TITLE</th>
                <th className="th-myorder">QTY</th>
                <th className="th-myorder">PRICE</th>
                <th className="th-myorder">TOTAL</th>
                <th className="th-myorder">PAID</th>
                <th className="th-myorder">DATE</th>
              </tr>
              <tr className="tr-myorder">
                <td className="td-myorder">
                  Casual Regular Sleeves Solid Women Green Top
                </td>
                <td className="td-myorder">4</td>
                <td className="td-myorder">900</td>
                <td className="td-myorder">2800</td>
                <td className="td-myorder">
                  <p className="action-paid">NO</p>
                </td>
                <td className="td-myorder">29-05-2022</td>
              </tr>
              <tr className="tr-myorder">
                <td className="td-myorder">
                  Casual Regular Sleeves Solid Women Green Top
                </td>
                <td className="td-myorder">4</td>
                <td className="td-myorder">900</td>
                <td className="td-myorder">2800</td>
                <td className="td-myorder">
                  <p className="action-paid">NO</p>
                </td>
                <td className="td-myorder">29-05-2022</td>
              </tr>
              <tr className="tr-myorder">
                <td className="td-myorder">
                  Casual Regular Sleeves Solid Women Green Top
                </td>
                <td className="td-myorder">4</td>
                <td className="td-myorder">900</td>
                <td className="td-myorder">2800</td>
                <td className="td-myorder">
                  <p className="action-paid">NO</p>
                </td>
                <td className="td-myorder">29-05-2022</td>
              </tr>
              <tr className="tr-myorder">
                <td className="td-myorder">
                  Casual Regular Sleeves Solid Women Green Top
                </td>
                <td className="td-myorder">4</td>
                <td className="td-myorder">900</td>
                <td className="td-myorder">2800</td>
                <td className="td-myorder">
                  <p className="action-paid">NO</p>
                </td>
                <td className="td-myorder">29-05-2022</td>
              </tr>
              <tr className="tr-myorder">
                <td className="td-myorder">
                  Casual Regular Sleeves Solid Women Green Top
                </td>
                <td className="td-myorder">4</td>
                <td className="td-myorder">900</td>
                <td className="td-myorder">2800</td>
                <td className="td-myorder">
                  <p className="action-paid">NO</p>
                </td>
                <td className="td-myorder">29-05-2022</td>
              </tr>
              <tr className="tr-myorder">
                <td className="td-myorder">
                  Casual Regular Sleeves Solid Women Green Top
                </td>
                <td className="td-myorder">4</td>
                <td className="td-myorder">900</td>
                <td className="td-myorder">2800</td>
                <td className="td-myorder">
                  <p className="action-paid">NO</p>
                </td>
                <td className="td-myorder">29-05-2022</td>
              </tr>
              <tr className="tr-myorder">
                <td className="td-myorder">
                  Casual Regular Sleeves Solid Women Green Top
                </td>
                <td className="td-myorder">4</td>
                <td className="td-myorder">900</td>
                <td className="td-myorder">2800</td>
                <td className="td-myorder">
                  <p className="action-paid">NO</p>
                </td>
                <td className="td-myorder">29-05-2022</td>
              </tr>
              <tr className="tr-myorder">
                <td className="td-myorder">
                  Casual Regular Sleeves Solid Women Green Top
                </td>
                <td className="td-myorder">4</td>
                <td className="td-myorder">900</td>
                <td className="td-myorder">2800</td>
                <td className="td-myorder">
                  <p className="action-paid">NO</p>
                </td>
                <td className="td-myorder">29-05-2022</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyOrder;
