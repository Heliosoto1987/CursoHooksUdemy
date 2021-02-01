import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

export const ReactStrap = () => {
 

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Contex</NavbarBrand>
          <Nav className="mr-auto" navbar>
                 
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about">About</NavLink>
            </NavItem>
           
          </Nav>
          <NavbarText>Simple Text</NavbarText>
      </Navbar>
    </div>
  );
}

