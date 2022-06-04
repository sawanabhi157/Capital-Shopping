import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WomensPage.css";
import CardProduct from "../../components/generalComponents/CardProduct";
import Navbar from "../../components/generalComponents/Navbar";
import Footer from "../../components/generalComponents/Footer";
import DiscountBanner from "../../components/generalComponents/DiscountBanner";
import CatergoryContainer from "../../components/generalComponents/CatergoryContainer";
function WomensPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    try {
      const product = await axios.get("http://localhost:5000/products");
      // console.log(product.data);
      setProducts(product.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <DiscountBanner />
      <CatergoryContainer />

      <div className="main-women-container">
        <div className="inner-main-women-container">
          <div className="women-container-left"></div>
          <div className="women-container-right">
            {products.map((item) => {
              return (
                <CardProduct
                  title={item.title}
                  newPrice={item.newPrice}
                  oldPrice={item.oldPrice}
                  imgUrl={item.imgUrl}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WomensPage;
