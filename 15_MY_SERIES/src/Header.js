import React, { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
  } from "reactstrap";
  import { Link } from "react-router-dom";
  

const Header = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
      setOpen(!open);
    };
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">Minhas Series</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={open} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/series">Series</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/generos">Genêros</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  };

export default Header