
import {NavLink as ReactLink} from 'react-router-dom';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

const CustomNavbar = ()=>{

  const [isOpen,setIsOpen]= useState(false);
    return (

        <div>
        <Navbar 
         color="dark"
         dark
         expand="md"
         fixed=" "
        >
          <NavbarBrand tag={ReactLink} to= '/'>MindCrafter</NavbarBrand>
          <NavbarToggler onClick={()=>setIsOpen(!isOpen)} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink tag = {ReactLink} to= '/login'>Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag = {ReactLink} to='/signup'>
                  Signup
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to='/about'>
                  About
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  More
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem tag={ReactLink} to ="/services">Services</DropdownItem>
                  <DropdownItem>Contact us</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Youtube</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Youtube</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
};

export default CustomNavbar;