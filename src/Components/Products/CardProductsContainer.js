import React, { useState, useRef, useEffect } from "react";
import { Row } from "react-bootstrap";
import { Container, Col, Collapse } from "react-bootstrap";
import ProductCard from "./ProductCard";
import SubTitle from "../Utility/SubTitle.js";
import { useDispatch, useSelector } from "react-redux";
import { get_products } from "../../redux/actions/Product-action";

const CardProductsContainer = ({ title, btntitle, pathText }) => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(get_products())
  },[])
  const products=useSelector(state=>state.Productsreducer.products)
  console.log(products)
  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} pathText="/products" />
      <Row className="justify-content-between ">
       {products.map(e=>
        <ProductCard product={e} />
        )} 
       
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
