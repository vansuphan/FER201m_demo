import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Nav, NavItem,  } from "reactstrap";

export default function NavigationStrap() {
  // const navigate = useNavigate();
 
  // useEffect(() => {
  //   if (true) {
  //     navigate('/home');
  //   }
  // }, [])
  return (
    <Nav >
      <NavItem>
       
          <NavLink to={{pathname: "/home"}}>Home</NavLink>
      </NavItem>
      <NavItem>
          <NavLink to={{pathname: "/news"}}>News</NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          <NavLink to={{pathname: "/news/2100"}}>News 2100</NavLink>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink >
          <NavLink to={{pathname: "/login"}}>Login</NavLink>
        </NavLink>
      </NavItem>
    </Nav>
  );
}
