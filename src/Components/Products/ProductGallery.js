import React, { useEffect } from "react";
import mobile from "../../images/mobile.png";
import mobile1 from "../../images/mobile1.png";
import mobile2 from "../../images/mobile2.png";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { one_product } from "../../redux/actions/Product-action";
import { CardImg } from "react-bootstrap";
const ProductGallery = () => {
  const dispatch=useDispatch()
  var id=useParams()
  console.log(id)
  useEffect(()=>{
dispatch(one_product(id.id))
  },[])
  const product=useSelector(state=>state.Productsreducer.oneproduct)
  console.log(product)
  const images = [
    {
      original: `${mobile}`,
    },
    {
      original: `${mobile1}`,
    },
    {
      original: `${mobile2}`,
    },
    {
      original: `${mobile}`,
    },
  ];

  return (
    <div className="product-gallary-card d-flex justfiy-content-center  align-items-center
    pt-2">
      <CardImg src={product.image} />
    </div>
  );
};

export default ProductGallery;
