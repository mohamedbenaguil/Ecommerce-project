import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import CartItem from "../Cart/CartItem";

const AdminOrderDetalis = () => {
  return (
    <div>
      <div className="admin-content-text">Details of order number #231231</div>
      <CartItem />
      <CartItem />

      <Row className="justify-content-center mt-4 user-data">
        <Col xs="12" className=" d-flex">
          <div className="admin-content-text py-2">Client details</div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}>
           the name:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2">
            mohamed
          </div>
        </Col>

        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}>
            Phone number:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2">
            0021313432423
          </div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}>
            Email:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2">
            ahmed@gmail.com
          </div>
        </Col>
        <div className=" d-inline px-4 border text-center pt-2">
        The total is 4000 £
        </div>
        <div className="d-flex mt-2 justify-content-center">
          <select
            name="languages"
            id="lang"
            className="select input-form-area mt-1  text-center px-2 w-50">
            <option value="val">Order status</option>
            <option value="val2">In progress</option>
            <option value="val2">Finished</option>
            <option value="val2">Cancel</option>
          </select>
          <button className="btn-a px-3 d-inline mx-2 ">save </button>
        </div>
      </Row>
    </div>
  );
};

export default AdminOrderDetalis;
