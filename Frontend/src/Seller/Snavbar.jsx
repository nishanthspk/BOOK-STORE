// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link } from "react-router-dom"

const Snavbar = () => {
  const get=localStorage.getItem('user')
  return (
    <Navbar bg="" variant="dark" expand="lg" style={{backgroundColor:"blue"}}>
      <Container>
        <Navbar.Brand ><Link to='/shome' style={{color:"white",textDecoration:"none"}}>BookStore(Seller)</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" >
            <Link to="/shome" style={{padding:"10px",color:"white",textDecoration:"none"}}>Home</Link>
            <Link to="/myproducts" style={{padding:"10px",color:"white",textDecoration:"none"}}>Myproducts</Link>
            <Link to="/addbook" style={{padding:"10px",color:"white",textDecoration:"none"}}>Add Books</Link>
            <Link to="/orders" style={{padding:"10px",color:"white",textDecoration:"none"}}>Orders</Link>
            <Link to="/" style={{paddingLeft:"10px",paddingTop:"10px",color:"white",textDecoration:"none"}}>Logout</Link>
            <h4 style={{color:"white",paddingTop:"0px"}}>({JSON.parse(get).name} )</h4>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Snavbar;
