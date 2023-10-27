import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import mobile from "../../images/mobile.png";
import deleteicon from "../../images/delete.png";
import { useDispatch } from "react-redux";
import { delItem } from "../../redux/actions/Cart-action";
import CartCheckout from "./CartCheckout";
const CartItem = ({product}) => {
  
  
  return (
    <div>
    
    <Col>
    <CartCheckout/>
    </Col>
    </div>
  );
};

export default CartItem;
