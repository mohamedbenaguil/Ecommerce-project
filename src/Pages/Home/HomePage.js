import React from "react";
import NavBarLogin from "../../Components/Utility/NavBarLogin";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeatured";
import Footer from "../../Components/Utility/Footer.js";
const Home = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <Slider />
      <HomeCategory />
      <CardProductsContainer
        title="best seller"
        btntitle="More"
        pathText="/products"
      />
      <DiscountSection />
      <CardProductsContainer
        title="Latest fashion"
        btntitle="More"
        pathText="/products"
      />
      <BrandFeatured
        title="The best brands"
        btntitle="More"
        pathText="/allbrands"
      />
    </div>
  );
};

export default Home;
