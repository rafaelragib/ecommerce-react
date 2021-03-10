import React from "react"
import {Navbar,Nav,Form,Button,FormControl} from 'react-bootstrap'
import logo from '../../Asset/logo.png'
import './Navbar.css'

const Navigationbar = () =>
(
    <Navbar sticky="top" bg="light" expand="lg">
        <img
        alt="Logo"
        src={logo}
        className="d-inline-block align-top"
      />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto customNav">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About Us</Nav.Link>
      <Nav.Link href="#link">Gallery</Nav.Link>
      
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
    </Navbar>
)

export default Navigationbar