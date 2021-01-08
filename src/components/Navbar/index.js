import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/logo.svg')} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/Explore' activeStyle>
            Explore
          </NavLink>
          <NavLink to='/Problems' activeStyle>
            Problems
          </NavLink>
          <NavLink to='/Resources' activeStyle>
            Resources
          </NavLink>
          <NavLink to='/Blog' activeStyle>
            Blog
          </NavLink>
          {/* Second Nav */ }
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
