import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserAddressCard from "./UserAddressCard";

const UserAllAddress = () => {
  return (
    <div>
      <Row className="">
        <div className="admin-content-text">Address book</div>
        <UserAddressCard />
        <UserAddressCard />
        <Row className="justify-content-center">
          <Col sm="5" className="d-flex justify-content-center">
            <Link to="/user/add-address" style={{ textDecoration: "none" }}>
              <button className="btn-add-address">Add a new address</button>
            </Link>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default UserAllAddress;
