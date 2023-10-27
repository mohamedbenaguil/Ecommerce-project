import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import avatar from "../../images/avatar.png";
import add from "../../images/add.png";
import Multiselect from "multiselect-react-dropdown";
import { useDispatch } from "react-redux";
import { add_product } from "../../redux/actions/Product-action";

const AdminAddProducts = () => {
  const [name,setname]=useState("")
  const [description,setdesc]=useState("")
  const [price,setprice]=useState(0)
  const [image,setimage]=useState("")
  const dispatch=useDispatch()
  const addproduct=()=>{
    dispatch(add_product({name,description,price,image}))
  }
  const options = [
    { name: "First classification", id: 1 },
    { name: "Second classification", id: 2 },
  ];
  const onSelect = (selectedList, selectedItem) => {};

  const onRemove = (selectedList, removedItem) => {};
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4"> Add a new product</div>
        <Col sm="8">
          <div className="text-form pb-2"> Pictures of the product</div>
          <img src={avatar} alt="" height="100px" width="120px" />
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="product image"
            onChange={(e)=>setimage(e.target.value)}
          />
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="product name"
            onChange={(e)=>setname(e.target.value)}
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="Product Description"
            onChange={(e)=>setdesc(e.target.value)}
          />
         
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="Product price"
            onChange={(e)=>setprice(e.target.value)}
          />
         

       
          
          <div className="text-form mt-3 ">Available colors of the product</div>
          <div className="mt-1 d-flex">
            <div
              className="color ms-2 border  mt-1"
              style={{ backgroundColor: "#E52C2C" }}></div>
            <div
              className="color ms-2 border mt-1 "
              style={{ backgroundColor: "white" }}></div>
            <div
              className="color ms-2 border  mt-1"
              style={{ backgroundColor: "black" }}></div>
            <img src={add} alt="" width="30px" height="35px" className="" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 " onClick={addproduct}>Save modifications</button>
        </Col>
      </Row>
    </div>
  );
};

export default AdminAddProducts;
