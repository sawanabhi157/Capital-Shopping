import React, { Component } from "react";
import Slider from "react-slick";
import "./ProductSlider.css";
import CardProduct from "../generalComponents/CardProduct";
import { menData } from "../../storage/MensData";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "80%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function ProductSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          nextArrow: <SampleNextArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow: <SampleNextArrow />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
        },
      },
    ],
  };

  return (
    <div className="container-carousel">
      <p className="carousel-p"> You May Like </p>
      <Slider {...settings}>
        {menData.map((item) => {
          return (
            <div>
              <CardProduct
                title={item.title}
                newPrice={item.newPrice}
                oldPrice={item.oldPrice}
                imgUrl={item.imgUrl}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ProductSlider;
