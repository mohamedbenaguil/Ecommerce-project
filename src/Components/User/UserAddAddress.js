import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

const UserAddAddress = () => {
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-2">Add a new address</div>
        <Col sm="8">
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Naming the address, for example (home - work)"
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="Detailed address"
          />
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="phone number"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 ">Add a title</button>
        </Col>
      </Row>
    </div>
  );
};

export default UserAddAddress;
