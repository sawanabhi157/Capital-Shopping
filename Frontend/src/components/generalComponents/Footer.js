import React from "react";
import "./Footer.css";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
const style = {
  color: "#CBD4CF",
  fontSize: "1.5em",
  marginRight: "10px",
  cursor: "pointer",
};
function Footer() {
  return (
    <div className="footer">
      <div className="f-top">
        <div className="f-one">
          <h2>Subscribe Newsletter</h2>
          <p>Subscribe newsletter to get 5% on all products</p>
        </div>
        <div className="f-two">
          <input placeholder="Enter  your email" type="text" />
          <button className="button-footer">Subscriber</button>
        </div>
        <div className="f-three">
          <AiFillInstagram style={style} />
          <AiFillFacebook style={style} />
          <AiOutlineTwitter style={style} />
        </div>
      </div>

      <div className="f-center">
        <div className="ekart-logo"></div>
        <div className="sec1">
          <h3>Shop Women</h3>
          <p>Clothing Fashion</p>
          <p>Winter</p>
          <p>Summer</p>
          <p>Formal</p>
          <p>Casual</p>
        </div>
        <div className="sec2">
          <h3>Baby Collection</h3>
          <p>Clothing Fashion</p>
          <p>Winter</p>
          <p>Summer</p>
          <p>Formal</p>
          <p>Casual</p>
        </div>
        <div className="sec3">
          <h3>Shop Men</h3>
          <p>Clothing Fashion</p>
          <p>Winter</p>
          <p>Summer</p>
          <p>Formal</p>
          <p>Casual</p>
        </div>
        <div className="sec4">
          <h3>Quick Links</h3>
          <p>Track Your Order</p>
          <p>Support</p>
          <p>FAQ</p>
          <p>Carrier</p>
          <p>About</p>
          <p>Contact Us</p>
        </div>
      </div>

      <div className="f-bottom ">
        <p>
          Copyright ©2022 All rights reserved | This template is made with @
          Ekart
        </p>
      </div>
    </div>
  );
}

export default Footer;
