import React from "react";
import CardCart from "../../components/generalComponents/CardCart";
import Navbar from "../../components/generalComponents/Navbar";
import Footer from "../../components/generalComponents/Footer";
import DiscountBanner from "../../components/generalComponents/DiscountBanner";
import CatergoryContainer from "../../components/generalComponents/CatergoryContainer";
import "./ShoppingCart.css";

function ShoppingCart() {
  return (
    <>
      <Navbar />
      <DiscountBanner />
      <CatergoryContainer />

      <div className="main-shoppingcart">
        <div className="inner-main-shoppingcart">
          <div className="inner-shopping-cart-left">
            <CardCart />
            <CardCart />
            <CardCart />
            <CardCart />
            <CardCart />
          </div>
          <div className="inner-shopping-cart-right">
            <div className="inner-right-cart-shopping">
              <div className="total-shopping-cart">
                <p>Total</p>
                <p>129938</p>
              </div>
              <div className="shopping-address-cart">
                <p>Shipping Address</p>
                <textarea name="" id=""></textarea>
              </div>
              <div className="checkout-button">
                <button className="checkout-button-btn">Proceed To Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ShoppingCart;
