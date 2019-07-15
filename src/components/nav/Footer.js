import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Footer extends Component {
  render () {
    return (
      <div>
        <hr />
        <h1>Footer</h1>
          <Nav>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Another Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">Disabled Link</NavLink>
            </NavItem>
          </Nav>

      </div>
    );
  };
};

export default Footer;
