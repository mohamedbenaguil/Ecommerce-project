import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import prod1 from "../../images/prod1.png";
import { useDispatch } from "react-redux";
import { delete_product } from "../../redux/actions/Product-action";
const AdminAllProducsCard = ({product}) => {
  const dispatch=useDispatch()
  return (
    <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "350px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
        }}>
        <Row className="d-flex justify-content-center px-2">
          <Col className=" d-flex justify-content-between">
            <button className="d-inline item-delete-edit" onClick={()=>dispatch(delete_product(product._id))}>Remove</button>
            <button className="d-inline item-delete-edit">edit</button>
          </Col>
        </Row>
        <Link to={`/products/${product._id}`} style={{ textDecoration: "none" }}>
          <Card.Img style={{ height: "228px", width: "100%" }} src={product.image} />
          <Card.Body>
            <Card.Title>
              <div className="card-title">
              {product.name}{" "}
              </div>
            </Card.Title>
            <Card.Text>
              {product.description}
              <div className="d-flex justify-content-between">
                
                <div className="d-flex">
                  <div className="card-currency mx-1">£</div>
                  <div className="card-price">{product.price}</div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};

export default AdminAllProducsCard;
