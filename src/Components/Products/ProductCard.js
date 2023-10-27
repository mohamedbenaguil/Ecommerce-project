import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import prod1 from "../../images/item.png";
import favoff from "../../images/fav-off.png";
import rate from "../../images/rate.png";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
      <Link
        to={`/products/${product._id}`}
        style={{
          textDecoration: "none",
        }}>
        <Card
          className="my-2"
          style={{
            width: "100%",
            height: "345px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FFFFFF",
            boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
          }}>
          <Card.Img style={{ height: "228px", width: "100%" }} src={product.image} />
         
          <Card.Body>
            <Card.Title>
              <div className="card-title">
              {product.name}{" "}             
               </div>
            </Card.Title>
            <Card.Text>
            {product.description}
              <div className="d-flex justify-content-between ">
               
               
                <div className="d-flex">
                  <div className="card-price">{product.price}</div>
                  <div className="card-currency mx-1">£</div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default ProductCard;
