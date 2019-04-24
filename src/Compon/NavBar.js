import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import {NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './comp.css';



class Navb extends React.Component {

    render() {        
      return (

        <Navbar bg="light" expand="lg">
        <Navbar.Brand className="Ho" href="#home">The Process</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Gallery</Nav.Link>
            <NavDropdown title="Where Are You?" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Thinking</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Planning</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Conquering</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">About Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

  
  

    

       
      )
    }
  
  
  }

  export default Navb