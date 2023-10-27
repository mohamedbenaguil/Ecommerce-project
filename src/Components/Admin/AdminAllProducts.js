import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import AdminAllProducsCard from "./AdminAllProducsCard";
import { useDispatch, useSelector } from "react-redux";
import { get_products } from "../../redux/actions/Product-action";
const AdminAllProducts = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(get_products())
  },[])
  const products=useSelector(state=>state.Productsreducer.products)
  console.log(products)
  return (
    <div>
      <div className="admin-content-text">Manage all products</div>
      <Row className="justify-content-center ">
       {products.map(e=>
        <AdminAllProducsCard product={e}/>
        )} 
        
      </Row>
    </div>
  );
};

export default AdminAllProducts;
