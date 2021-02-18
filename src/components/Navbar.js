import React, { useState } from 'react'
import {
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNavbar,
  CNavbarNav,
  CNavbarBrand,
  CToggler,
  CNavLink,
  CDropdown,
  CForm,
  CInput,
  CButton,
  CImg
} from '@coreui/react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <CNavbar expandable="sm" color="primary" fixed="top">
      <CToggler inNavbar onClick={() => setIsOpen(!isOpen)}/>
      <CNavbarBrand>
        NavbarBrand
      </CNavbarBrand>
      <CCollapse show={isOpen} navbar>
        <CNavbarNav>
          <CNavLink>Home</CNavLink>
          <CNavLink>Link</CNavLink>
        </CNavbarNav>
        <CNavbarNav className="ml-auto">
          <CForm inline>
            <CInput
              className="mr-sm-2"
              placeholder="Search"
              size="sm"
            />
            <CButton color="light" className="my-2 my-sm-0" type="submit">Search</CButton>
          </CForm>
          <CDropdown
            inNav
          >
            <CDropdownToggle color="primary">
              Lang
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem>EN</CDropdownItem>
              <CDropdownItem>ES</CDropdownItem>
              <CDropdownItem>RU</CDropdownItem>
              <CDropdownItem>FA</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <CDropdown
            inNav
          >
            <CDropdownToggle color="primary">
              User
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem>Account</CDropdownItem>
              <CDropdownItem>Settings</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CNavbarNav>
      </CCollapse>
    </CNavbar>
  )
}

export default Navbar
