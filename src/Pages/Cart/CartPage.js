import React from "react";
import { Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import CartItem from "../../Components/Cart/CartItem";
import CartCheckout from "../../Components/Cart/CartCheckout";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { delItem } from "../../redux/actions/Cart-action";
import deleteicon from "../../images/delete.png";
const CartPage = () => {
  const products=useSelector(state=>state.addItems)
  
  const dispatch=useDispatch()
  console.log(products)
  return (
    <Container className="" style={{ minHeight: "680px" }}>
      <Row>
        <div className="cart-title mt-4">Shopping cart</div>
      </Row>
      <Row className="d-flex justify-content-center">
        <NavLink to="/">Go to home</NavLink>
        <Col xs="12" md="9">
         {products.map(product=>
          <Col xs="12" className="cart-item-body my-2 d-flex px-2">
          <img width="160px" height="197px" src={product.product.image} alt="" />
          <div className="w-100">
            <Row className="justify-content-between">
              <Col sm="12" className=" d-flex flex-row justify-content-between">
                <div className="d-inline pt-2 cat-text">Electronics</div>
                <div className="d-flex pt-2 " style={{ cursor: "pointer" }}>
                  <img src={deleteicon} alt="" width="20px" height="24px" />
                  <button className="cat-text d-inline me-2" onClick={()=>dispatch(delItem(product.product._id))}>Remove</button>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center mt-2">
              <Col sm="12" className=" d-flex flex-row justify-content-start">
                <div className="d-inline pt-2 cat-title">
                {product.product.name}           
                </div>
               
              </Col>
            </Row>
           
            <Row>
              <Col sm="12" className="mt-1 d-flex">
                <div
                  className="color ms-2 border"
                  style={{ backgroundColor: "#E52C2C" }}></div>
              </Col>
            </Row>
    
            <Row className="justify-content-between">
              <Col sm="12" className=" d-flex flex-row justify-content-between">
                
                <div className="d-inline pt-2 barnd-text">{product.product.price} £</div>
                <div className="d-inline pt-2 barnd-text">quantity:{product.quantity} </div>
              </Col>
            </Row>
          </div>
          
        </Col>
          ) }
         
        </Col>
        <Col xs="6" md="3" >
          <CartCheckout products={products}/>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
