/* eslint-disable no-undef */
import React, { useState } from "react";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  Input,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  UncontrolledDropdown,
  Button,
  Row,
  Col
} from "reactstrap";
import NavigationStrap from "../nav/NavigationStrap";

export default function NavbarStrap(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" expand="md" sticky="top" {...props}>
      <NavbarBrand href="/">
        <h3>LOGO</h3>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              GitHub
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* <NavigationStrap /> */}
        <Row>
        <Form >
          <Row>
            <Col className="p-0 col-8" >
              <Input placeholder="Search"/>
            </Col>
            <Col className="ps-1 ms-1" > 
              <Button style={{width: "100%"}}>Search</Button>
            </Col>
          </Row>
        </Form>
        </Row>
      </Collapse>
    </Navbar>
  );
}
