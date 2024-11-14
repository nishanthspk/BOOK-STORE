// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link } from "react-router-dom";
import BG from "../Assets/Bookbg.jpg";

const Home = () => {
 
  return (
    <div className='' style={{ backgroundImage: `url(${BG})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', width: '100vw' }}>
    
    <Navbar bg="" variant="dark" expand="lg" style={{backgroundColor:"transparent" , height: '10vh'}}>
      <Container>
        <Navbar.Brand className="fs-1" style={{paddingTop:"20px"}}><Link to='/' style={{color:'white',textDecoration:"none"}}>Tales & Tomes</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto fs-2">
            <Link to="/login" className="rounded-2xl text-black bg-light" style={{padding:"6px",color:"white",textDecoration:"none",marginTop:"30px",marginRight:"10px",backgroundColor: 'darkgreen'}}>User</Link>
            <Link to="/slogin"  className="rounded-2xl text-black bg-light" style={{padding:"6px",color:"white",textDecoration:"none",marginTop:"30px",marginRight:"10px",backgroundColor: 'orangered'}}>Seller</Link>
            <Link to="/alogin"  className="rounded-2xl text-black bg-light" style={{padding:"6px",color:"white",textDecoration:"none",marginTop:"30px",backgroundColor: 'orangered'}}>Admin</Link>   
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  
  );
};

export default Home;
