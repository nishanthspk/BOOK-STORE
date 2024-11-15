// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link } from "react-router-dom"

const Snavbar = () => {
  const get=localStorage.getItem('user')
  return (
  <div style={{paddingTop:"20px"}}>
    <Navbar bg="" variant="dark" expand="lg" style={{backgroundColor:"blue",marginLeft:"20px",marginRight:"20px"}} className="rounded-3xl" >
      <Container>
        <Navbar.Brand ><Link to='/shome' className='fs-2' style={{color:"white",textDecoration:"none"}}>BookStore(Seller)</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" >
            <Link to="/shome" className='fs-4' style={{padding:"10px",color:"white",textDecoration:"none"}}>Home</Link>
            <Link to="/myproducts" className='fs-4' style={{padding:"10px",color:"white",textDecoration:"none"}}>Myproducts</Link>
            <Link to="/addbook" className='fs-4' style={{padding:"10px",color:"white",textDecoration:"none"}}>Add Books</Link>
            <Link to="/orders" className='fs-4' style={{padding:"10px",color:"white",textDecoration:"none"}}>Orders</Link>
            <Link to="/" className='fs-4' style={{paddingLeft:"10px",paddingTop:"10px",color:"white",textDecoration:"none"}}>Logout</Link>
            <h4 style={{color:"white",paddingTop:"14px",paddingLeft:"8px"}}>({JSON.parse(get).name} )</h4>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Snavbar;
