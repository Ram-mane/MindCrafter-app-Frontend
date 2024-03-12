import { NavLink as ReactLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
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
} from "reactstrap";
import { doLogout, getCurrentUserDetails, isLoggedIn } from "../authFunc";

const CustomNavbar = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const [userDetails, setUserDetails] = useState(null);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    setLogin(isLoggedIn());
    setUserDetails(getCurrentUserDetails());
  }, [login]);

  const logout = () => {
    doLogout(() => {
      setLogin(false);
      navigate("/login");
    });
  };

  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed=" " className="px-4">
        <NavbarBrand tag={ReactLink} to="/">
          MindCrafter
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/">
                New Feeds
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={ReactLink} to="/services">
                Services
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={ReactLink} to="/about">
                About
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Contact Us</DropdownItem>
                <DropdownItem>Facebook</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Youtube</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <Nav navbar>
            {login && (
              <>
                <NavItem>
                  <NavLink tag={ReactLink} to="/user/profile-info">
                    Profile
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink tag={ReactLink} to="/user/dashbord">
                    {userDetails.name}
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink onClick={logout} style={{ cursor: "pointer" }}>
                    Logout
                  </NavLink>
                </NavItem>
              </>
            )}

            {!login && (
              <>
                <NavItem>
                  <NavLink tag={ReactLink} to="/login">
                    Login
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink tag={ReactLink} to="/signup">
                    Signup
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
