import React from "react";
import "./DiscountBanner.css";
function DiscountBanner() {
  return (
    <div className="discount-banner">
      <p className="p-discount">
        Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer{" "}
        <a className="discount-buy-now" href="">
          Shop Now
        </a>
      </p>
    </div>
  );
}

export default DiscountBanner;
