import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #262533;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding:  0;/*0.5rem calc((100vw - 1000px) / 2);*/
  z-index: 10;

 
   justify-content: flex-start;
`;

export const NavLink = styled(Link)`
  color: #E5E5E5;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  float: right;
  &:hover {
    transition: all 0.2s ease-in-out;
    border-radius: 15%;
    height: 50px;
    background: #fff;
    color: #010606;
  }

  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  /* margin-right: -24px;*/
  padding-left: 35%;
  padding-right: 0;
  /* Second Nav */
  /* margin-right: 24px; */

  
   width: 100vw;
  white-space: nowrap; 

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;


   justify-content: flex-end;
  width: 100vw; 

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #FE9920;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  /*margin-left: 24px;*/

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
