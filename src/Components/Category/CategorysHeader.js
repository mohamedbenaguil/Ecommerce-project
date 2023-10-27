import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";

const CategorysHeader = () => {
  return (
    <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            <div className="cat-text-header ">ALL</div>
            <div className="cat-text-header">Electronics</div>
            <div className="cat-text-header">Cloth</div>
            <div className="cat-text-header"> Electricity</div>
            <div className="cat-text-header">Sale</div>
            <div className="cat-text-header">Sale</div>
            <div className="cat-text-header">Sale</div>
            <div className="cat-text-header">Sale</div>
            <div className="cat-text-header">Sale</div>
            <div className="cat-text-header">More</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategorysHeader;
