import React from "react";
import { Container } from "react-bootstrap";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import ProductDetails from "../../Components/Products/ProductDetails";
import CategorysHeader from "../../Components/Category/CategorysHeader";
import RateContainer from "../../Components/Rate/RateContainer";

const ProductDetalisPage = () => {
  return (
    <div>
      <CategorysHeader />
      <Container>
        <ProductDetails />
        
        <CardProductsContainer title="Products you may like" btntitle="" />
      </Container>
    </div>
  );
};

export default ProductDetalisPage;
