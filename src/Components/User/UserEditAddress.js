import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

const UserEditAddress = () => {
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-2">Edit title </div>
        <Col sm="8">
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            value="the home"
            placeholder="Address label, for example (home - work)"
                      />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            value="Cairo 6 October"
            placeholder="Detailed address"
          />
          <input
            type="text"
            value="01213621735"
            className="input-form d-block mt-3 px-3"
            placeholder="phone number"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 ">Save edited address</button>
        </Col>
      </Row>
    </div>
  );
};

export default UserEditAddress;
