import React from 'react';
import './NavBar.css';
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
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{ paddingTop: '15px', color: 'navy', fontWeight: 'bold' }}>
                  Home
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{ paddingTop: '15px', color: 'navy', fontWeight: 'bold' }}>
                  All Test
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="#" style={{ paddingTop: '15px', color: 'navy', fontWeight: 'bold' }}>Departments</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{ paddingTop: '15px', color: 'navy', fontWeight: 'bold' }}>Hospitals</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{ paddingTop: '15px', color: 'navy', fontWeight: 'bold' }}>Membership</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{ paddingTop: '15px', color: 'navy', fontWeight: 'bold' }}>Help</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{ paddingTop: '15px', color: 'navy', fontWeight: 'bold' }}>
                  <FontAwesomeIcon icon={faSearch} size="lg" style={{ color: 'navy' }} />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Input placeholder='Find your tests' className='NavBarSearch' />
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="#">
                  <Button style={{ backgroundColor: 'navy', borderRadius: '25px', width: '200px', fontWeight: 'bold' }}>
                    Book an appointment
                  </Button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <Button style={{ backgroundColor: 'darkorange', borderRadius: '25px', width: '100px', fontWeight: 'bold' }}>
                    Sign in
                  </Button>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
};
