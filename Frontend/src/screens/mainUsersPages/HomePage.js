import React from "react";
import "./HomePage.css";
import Navbar from "../../components/generalComponents/Navbar";
import Footer from "../../components/generalComponents/Footer";
import UperFooter from "../../components/generalComponents/UperFooter";
import ProductSlider from "../../components/homeCompoents/ProductSlider";
import CardCategory from "../../components/homeCompoents/CardCategory";
import CardReview from "../../components/homeCompoents/CardReview";
import DiscountBanner from "../../components/generalComponents/DiscountBanner";
function HomePage() {
  return (
    <div className="homepage-screen">
      <Navbar />
      <DiscountBanner />
      <div className="crouser-home">
        <img
          src="https://res.cloudinary.com/iiitm/image/upload/v1652363789/1_soaikl.jpg"
          alt=""
        />
      </div>
      <div className="cetegory-option-home">
        <div className="inner-category-option">
          <CardCategory
            ceategory="MENS"
            imgUrl="https://res.cloudinary.com/iiitm/image/upload/v1652438261/mens%20compressed/casual-dress-code-men-style-chris-pine-luxe-digital-min_cwmll9.jpg"
          />
          <CardCategory
            ceategory="WOMENS"
            imgUrl="https://res.cloudinary.com/iiitm/image/upload/v1652440350/womens%20compressed/pexels-antonio-friedemann-4078810-min_kejrzx.jpg"
          />
          <CardCategory
            ceategory="BABY COLLECTION"
            imgUrl="https://res.cloudinary.com/iiitm/image/upload/v1652444790/babycompressed/OIP_5_bxpmab.jpg"
          />
        </div>
      </div>
      <div className="review-slider-home">
        <CardReview />
      </div>
      <div className="products-container-home">
        <ProductSlider />
      </div>

      <UperFooter />
      <Footer />
    </div>
  );
}

export default HomePage;
