import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../../redux/action/productAction";

import Navbar from "../../components/generalComponents/Navbar";
import Footer from "../../components/generalComponents/Footer";
import "./ProductDetails.css";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import CatergoryContainer from "../../components/generalComponents/CatergoryContainer";
import DiscountBanner from "../../components/generalComponents/DiscountBanner";
function ProductDetails() {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { title, sellerName, imgUrl, newPrice, description } = product;
  const dispatch = useDispatch();
  console.log(productId);

  const fetchProductDetail = async (productId) => {
    const response = await axios
      .get(`http://localhost:5000/products/${productId}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <>
      <Navbar />
      <DiscountBanner />
      <CatergoryContainer />
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="product-details-container">
          <div className="inner-product-details-container">
            <div className="top-product-details">
              <div className="inner-top-product-details">
                <div className="product-img">
                  <div className="inner-product-img">
                    <img src={imgUrl} className="product-image" alt="" />
                  </div>
                </div>
                <div className="product-cart-option">
                  <div className="inner-product-cart-option">
                    <div className="top-product-cart-option">
                      <div className="title-product-cart">
                        <p className="title-product-cart-p">{title}</p>
                        <p className="title-product-cart-p1">{sellerName}</p>
                      </div>

                      <div className="price-product-cart">
                        <p className="rupees-symbole">
                          <BiRupee />
                        </p>
                        <p className="price-product-cart-p">{newPrice}</p>
                      </div>
                      <div className="rateing-product-cart">
                        <p className="rateing-product-cart-p">
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarHalf />
                        </p>
                      </div>
                      <div className="qty-size-product-cart">
                        <p>Qty</p>

                        <p>Size</p>
                      </div>
                      <div class="button" id="button-2">
                        <div id="slide"></div>
                        <a href="#">Add To Cart</a>
                      </div>
                    </div>
                    <div className="bottom-ptoduct-description">
                      <p className="bottom-ptoduct-description-p1">
                        Product Description
                      </p>
                      <p className="bottom-ptoduct-description-p2">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="bottom-comment-review">
            <div className="inner-bottom-comment-review">
              <div className="comment-product-details"></div>
              <div className="review-product-details"></div>
            </div>
          </div> */}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default ProductDetails;
