import React from "react";
import { Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import phone1 from "../../images/phone1.jpg"; 
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import mobile from "../../images/mobile.png";
import item from "../../images/item.png";
import CategoryCard from "../Category/CategoryCard";
import SubTitle from "../Utility/SubTitle";
const HomeCategory = () => {
  return (
    <Container>
      <SubTitle title=" Categories" btntitle="more" pathText="/allcategory" />
      <Row className="my-2 d-flex  justify-content-between">
        <CategoryCard img={phone1} background="#0034FF" />
        <CategoryCard img={labtop} background="#FFD3E8" />
        <CategoryCard img={labtop} background="#55CFDF" />
        <CategoryCard img={mobile} background="#FF6262" />
        <CategoryCard img={item} background="#F4DBA5" />
      </Row>
    </Container>
  );
};

export default HomeCategory;
