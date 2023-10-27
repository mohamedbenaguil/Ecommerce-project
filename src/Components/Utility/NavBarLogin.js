
import React, { useEffect } from "react";
import { Navbar, Nav, Container, FormControl } from "react-bootstrap";
import logo from "../../images/logo.png";
import login from "../../images/login.png";
import cart from "../../images/cart.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrent, logout } from "../../redux/actions/userAction";
import Button from 'react-bootstrap/Button';

const NavBarLogin = () => {
  const dispatch=useDispatch()
  
  useEffect(()=>{
    dispatch(getCurrent())
  },[])
  const user=useSelector(state=>state.Reducer.user)
  console.log(user)
  const log_out=()=>{
    dispatch(logout())
  }
  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <Nav.Link href="/">
            <img src={logo} className="logo" alt="sfvs" />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            type="search"
            placeholder="search..."
            className="me-2 w-100 text-center"
            aria-label="Search"
          />
          <Nav className="me-auto">
            {!user.name?<Nav.Link
              href="/login"
              className="nav-text d-flex mt-3 justify-content-center">
              <img src={login} className="login-img" alt="sfvs" />

              <p style={{ color: "white" }}>entrance</p>
            </Nav.Link>:<Button onClick={log_out} variant="dark">Logout</Button>}
            <Nav.Link
              href="/cart"
              className="nav-text d-flex mt-3 justify-content-center"
              style={{ color: "white" }}>
              <img src={cart} className="login-img" alt="sfvs" />
              <p style={{ color: "white" }}>The cart</p>
            </Nav.Link>
            {user.role==="admin"?<Nav.Link href="/admin/allproducts" style={{ textDecoration: "none" }}>
            <label className="mx-auto text-center">admin account</label>
          </Nav.Link>:null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLogin;
