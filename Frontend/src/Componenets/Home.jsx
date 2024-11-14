// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link } from "react-router-dom";
import BG from "../Assets/Bookbg.jpg";

const Home = () => {
 
  return (
    <div className='' style={{ backgroundImage: `url(${BG})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', width: '100vw' }}>
    
    <Navbar bg="" variant="dark" expand="lg" style={{backgroundColor:"brown" , height: '10vh'}}>
      <Container>
        <Navbar.Brand className="fs-1"><Link to='/' style={{color:'white',textDecoration:"none"}}>BookStore</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto fs-2">
            <Link to="/login" style={{padding:"10px",color:"white",textDecoration:"none"}}>User</Link>
            <Link to="/slogin" style={{padding:"10px",color:"white",textDecoration:"none"}}>Seller</Link>
            <Link to="/alogin" style={{padding:"10px",color:"white",textDecoration:"none"}}>Admin</Link>   
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  
  );
};

export default Home;
