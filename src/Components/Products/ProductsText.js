import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { one_product } from "../../redux/actions/Product-action";
import { addItem } from "../../redux/actions/Cart-action";
import { useState } from "react";

const ProductsText = () => {
  const dispatch=useDispatch()
  var id=useParams()
  console.log(id)
  const [quantity,setQuan]=useState(0)
  useEffect(()=>{
dispatch(one_product(id.id))
  },[])
  const product=useSelector(state=>state.Productsreducer.oneproduct)
  console.log(product)
  return (
    <div>
      <Row className="mt-2">
        <div className="cat-text">Electronics</div>
      </Row>
      <Row>
        <Col md="8">
        <div className="cat-title d-inline">
           {product.name}
          </div>
        </Col>
      </Row>
     
      <Row>
        <Col md="8" className="mt-1 d-flex">
          <div
            className="color ms-2 border"
            style={{ backgroundColor: "#E52C2C" }}></div>
          <div
            className="color ms-2 border "
            style={{ backgroundColor: "white" }}></div>
          <div
            className="color ms-2 border"
            style={{ backgroundColor: "black" }}></div>
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">specifications :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
         {product.description}
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">{product.price} £</div>
          
          <div className="d-inline pt-2 d-flex">
                  <div className="cat-text  d-inline">Quantity</div>
                  <input
                    className="mx-2 "
                    type="number"
                    style={{ width: "40px", height: "25px" }}
                    onChange={(e)=>setQuan(e.target.value)}
                  />
                </div>
                <br/>
          <Link to={"/cart"}>
          <button className="product-cart-add px-3 py-3 d-inline mx-3" onClick={()=>dispatch(addItem(product,quantity))}>Add to cart</button>
          </Link>
          
        </Col>
      </Row>
    </div>
  );
};

export default ProductsText;
