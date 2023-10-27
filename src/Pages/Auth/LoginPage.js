import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/userAction";

const LoginPage = () => {
  const [email, setemail ]= useState("");
  const [password, setpassword ]= useState("");
  const dispatch = useDispatch() ;
  const navigate = useNavigate() ;
  const handlelogin=()=>{
    dispatch(login({email,password},navigate))
  }
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">sign in</label>
          <input 
          placeholder="Email..."
          type="text"
            className="user-input my-3 text-center mx-auto"
            onChange={(e)=>setemail(e.target.value)}
          />
          <input
            placeholder="password..."
            type="password"
            className="user-input text-center mx-auto"
            onChange={(e)=>setpassword(e.target.value)}
          />
          <button className="btn-login mx-auto mt-4" onClick={handlelogin}>sign in</button>
          <label className="mx-auto my-4">
          Don't have an account?{" "}
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
              Press here
              </span>
            </Link>
          </label>
          
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
