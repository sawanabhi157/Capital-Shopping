import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/action/productAction";
import "./MensPage.css";
import CardProduct from "../../components/generalComponents/CardProduct";
import Navbar from "../../components/generalComponents/Navbar";
import Footer from "../../components/generalComponents/Footer";
import DiscountBanner from "../../components/generalComponents/DiscountBanner";
import CatergoryContainer from "../../components/generalComponents/CatergoryContainer";
import { SERVER_URL } from "../../utils";

const MensPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios.get(`${SERVER_URL}/products`).catch((err) => {
      console.log("Err: ", err);
    });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);

  // Without Redux Simple fetching using Axios

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   getProducts();
  // }, []);
  // const getProducts = async () => {
  //   try {
  //     const product = await axios.get("http://localhost:5000/products");
  //     console.log(product.data);
  //     // setProducts(product.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      <Navbar />
      <DiscountBanner />
      <CatergoryContainer />
      <div className="main-men-container">
        <div className="inner-main-men-container">
          <div className="men-container-left"></div>
          <div className="men-container-right">
            <CardProduct />
            {/* {products.map((item) => {
              return (
                <CardProduct
                  title={item.title}
                  newPrice={item.newPrice}
                  oldPrice={item.oldPrice}
                  imgUrl={item.imgUrl} 
                />
              );
            })} */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MensPage;
