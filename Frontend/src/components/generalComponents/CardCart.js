import React from "react";
import "./CardCart.css";
function CardCart() {
  return (
    <div className="card-cart-io">
      <div className="inner-card-cart-io">
        <div className="image-cart">
          <img
            src="https://res.cloudinary.com/iiitm/image/upload/v1652440349/womens%20compressed/15-min1-min_qxox8d.jpg"
            alt=""
          />
        </div>
        <div className="cart-card-content">
          <div className="title-cart-card">
            <p>Party Sleeveless Solid Women Black Top</p>
          </div>
          <div className="price-cart-card">
            <p>3999</p>
          </div>
          <div className="size-qty-cart-card">
            <p>Size</p>
            <p>Qty</p>
          </div>
          <div className="subtotal-cart-card">
            <p>SubTotal: 129990</p>
          </div>
          <div className="button-cart-card">
            <button className="cart-card-button">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCart;
