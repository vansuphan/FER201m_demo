import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

export default function NavigationStrap() {
  return (
    <Nav >
      {/* className="me-auto" navbar */}
      <NavItem>
        <NavLink active href="#">
          Link
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Another Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">
          Disabled Link
        </NavLink>
      </NavItem>
    </Nav>
  );
}
