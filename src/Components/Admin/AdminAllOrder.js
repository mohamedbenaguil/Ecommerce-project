import React from "react";
import { Row } from "react-bootstrap";
import AdminAllOrderProduct from "./AdminAllOrderProduct";
const AdminAllOrder = () => {
  return (
    <div>
      <Row className="justify-content-between ">
        <div className="admin-content-text">Manage all orders</div>
        <AdminAllOrderProduct />
        <AdminAllOrderProduct />
      </Row>
    </div>
  );
};

export default AdminAllOrder;
