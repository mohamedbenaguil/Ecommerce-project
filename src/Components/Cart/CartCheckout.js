import axios from "axios";
import React from "react";
import { Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartCheckout = ({products}) => {
  console.log(products)
  const handleCheckout = () => { 
    axios.post('/create-checkout-session',{products})
    .then((res)=> {
      if(res.data.url){
        window.location.href = res.data.url
      }
    }).catch((error)=>console.log(error.message));
  };
  return (
    <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
      <Col xs="12" className="d-flex  flex-column  ">
        
          <button className="product-cart-add w-100 px-2" onClick={handleCheckout}>Complete your purchase</button>
        
      </Col>
    </Row>
  );
};

export default CartCheckout;
