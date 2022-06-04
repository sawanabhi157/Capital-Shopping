import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./CardProduct.css";
import { BsSuitHeart, BsCart3 } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";

function CardProduct() {
  const products = useSelector((state) => state.allProducts.products);

  // let { title, newPrice, oldPrice, imgUrl } = props;

  const styeliconshover = {
    fontSize: "1.2rem",
    color: "black",
    padding: "8px 15px 8px 15px",
    cursor: "pointer",
  };
  const styeliconsrupees = {
    fontSize: "0.9rem",
    color: "black",
  };
  const renderList = products.map((product) => {
    const { _id, title, newPrice, oldPrice, imgUrl } = product;

    return (
      <Link to={`/product/${_id}`}>
        <div className="CardProduct-style" key={_id}>
          <div className="CardProduct-Image">
            <div className="inner-card-Image">
              <img src={imgUrl} alt="" className="card-img" />
            </div>
            <div className="inner-card-hover">
              <div className="card-hover">
                <div className="card-hover-cart">
                  <BsCart3 style={styeliconshover} />
                </div>
                <div className="card-hover-like">
                  <BsSuitHeart style={styeliconshover} />
                </div>
              </div>
            </div>
          </div>
          <div className="CardProduct-Details">
            <p className="card-title-p">{title}</p>
            <div className="CardProduct-Details-inner">
              <div className="CardProduct-Details-inner-inner">
                <div className="one-price">
                  <p className="rupees-logo">
                    <BiRupee style={styeliconsrupees} />
                  </p>

                  <p className="card-new-price">{newPrice}</p>
                </div>
                <div className="one-price">
                  <p className="rupees-logo">
                    <BiRupee style={styeliconsrupees} />
                  </p>
                  <p className="card-old-price">{oldPrice}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  });
  return <>{renderList}</>;
}

export default CardProduct;
