import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../redux/actions/userAction";

const Rigester = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [phone_number,setphone]=useState(0)
  const handleregister=()=>{
    dispatch(register({name,email,password,role:"user",phone_number},navigate))
  }
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center hieght-search">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">Register a new account</label>
          <input
            placeholder="user name..."
            type="text"
            className="user-input mt-3 text-center mx-auto"
            onChange={(e)=>setname(e.target.value)}
          />
          <input
            placeholder="phone number..."
            type="number"
            className="user-input mt-3 text-center mx-auto"
            onChange={(e)=>setphone(e.target.value)}
          />
          <input
            placeholder="Email..."
            type="text"
            className="user-input my-3 text-center mx-auto"
            onChange={(e)=>setemail(e.target.value)}
          />
          <input
            placeholder="Password..."
            type="password"
            className="user-input text-center mx-auto"
            onChange={(e)=>setpassword(e.target.value)}
          />
          <button className="btn-login mx-auto mt-4" onClick={handleregister}>Account registration</button>
          <label className="mx-auto my-4">
          Already have an account?{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                click here
              </span>
            </Link>
          </label>
        </Col>
      </Row>
    </Container>
  );
};

export default Rigester;
