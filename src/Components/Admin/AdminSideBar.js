import React from "react";
import { Link } from "react-router-dom";
const AdminSideBar = () => {
  return (
    <div className="sidebar">
      <div className="d-flex flex-column">
        <Link to="/admin/allproducts" style={{ textDecoration: "none" }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
          Product management
          </div>
        </Link>
        <Link to="/admin/addproducts" style={{ textDecoration: "none" }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
          Add a product
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminSideBar;
