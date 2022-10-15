import React from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";
import Brand_logo from '../../Images/Brand_logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
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
  Input,
  Button
} from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: '#abc7d3' }} light expand="md">
          <NavbarBrand href="/">
            <img src={Brand_logo} alt='Brand logo' />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="justify-content-end" style={{ width: "100%" }} navbar>

              <NavItem>
                <NavLink href="#" style={{ padding: '15px 15px 0px 15px', fontWeight: 'bold' }}>
                  <Link to="/" style={{ textDecoration: 'none', color: 'navy' }}>Home</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{ padding: '15px 15px 0px 15px', fontWeight: 'bold' }}>
                  <Link to="/testlist" style={{ textDecoration: 'none', color: 'navy' }}>Tests</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{ padding: '15px 15px 0px 15px', fontWeight: 'bold' }}>
                  <Link to="/lablist" style={{ textDecoration: 'none', color: 'navy' }}>Laboratory</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{ padding: '15px 15px 0px 15px', fontWeight: 'bold' }}>
                  <Link to="/register" style={{ textDecoration: 'none', color: 'navy' }}>Register</Link>
                </NavLink>
              </NavItem>


              <NavItem>
                <NavLink href="#" style={{ padding: '15px 15px 0px 15px', color: 'navy', fontWeight: 'bold' }}>Help</NavLink>
              </NavItem>


              <NavItem>
                <NavLink href="#" style={{ padding: '15px 15px 0px 15px', fontWeight: 'bold' }}>
                  <Link to="/cart" style={{ textDecoration: 'none', color: 'navy' }}>Cart</Link>
                </NavLink>
              </NavItem>


              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{ padding: '15px 15px 0px 15px', color: 'navy', fontWeight: 'bold' }}>
                  <FontAwesomeIcon icon={faSearch} size="lg" style={{ color: 'navy' }} />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <Input placeholder='Find your tests' className='NavBarSearch' />
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="#" style={{ padding: '10px 15px 0px 15px' }}>
                  <Button style={{ backgroundColor: 'navy', borderRadius: '25px', width: '200px', fontWeight: 'bold' }}>
                    Book an appointment
                  </Button>
                </NavLink>
              </NavItem>


              <NavItem>
                <NavLink href="#" style={{ padding: '10px 15px 0px 15px' }}>
                  <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                    <Button style={{ backgroundColor: 'darkorange', borderRadius: '25px', width: '100px', fontWeight: 'bold' }}>
                      Sign in
                    </Button>
                  </Link>
                </NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
};
