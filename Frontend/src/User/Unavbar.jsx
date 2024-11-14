// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link } from "react-router-dom"

const Unavbar = () => {
  const get=localStorage.getItem('user')
  return (
  <div style={{backgroundColor:"#81B5FA",paddingTop:"20px"}}>
    <Navbar bg="" variant="dark" expand="lg" className="rounded-3xl" style={{backgroundColor:"blue",marginLeft:"20px",marginRight:"20px"}}>
      <Container>
        <Navbar.Brand ><Link to='/uhome' className='fs-2' style={{color:'white',textDecoration:"none"}}>BookStore</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" >
            <Link to="/uhome" className='fs-4' style={{padding:"10px",color:"white",textDecoration:"none"}}>Home</Link>
            <Link to="/uproducts" className='fs-4' style={{padding:"10px",color:"white",textDecoration:"none"}}>Books</Link>
            <Link to="/wishlist" className='fs-4' style={{padding:"10px",color:"white",textDecoration:"none"}}>Wishlist</Link>
            <Link to="/myorders" className='fs-4' style={{padding:"10px",color:"white",textDecoration:"none"}}>My orders</Link>
            <Link to="/" className='fs-4' style={{paddingLeft:"10px",paddingTop:"10px",color:"white",textDecoration:"none"}}>Logout</Link>
            <h4 style={{color:"white",paddingTop:"14px",paddingLeft:"10px"}}>({JSON.parse(get).name} )</h4>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Unavbar;
