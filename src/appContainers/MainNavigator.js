import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavLink, DropdownItem, DropdownMenu, DropdownToggle, Dropdown,
} from 'reactstrap';

class MainNavigator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      toggleDropdown: false
    }
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  toggleDropdown = () => {
    this.setState({ toggleDropdown: !this.state.toggleDropdown })
  }

  handleChangePath = (url) => {
    window.scrollTo(0, 0)
    this.props.history.push(url);
    this.setState({ isOpen: !this.state.isOpen })
  }

  handleLogout = () => {
    localStorage.setItem('userName', "");
      this.props.setIsAuthenticated("")
    this.props.history.replace("/");
  }

  render() {
    return (
      <div id="MainNavContainer">
        <div id="NavContainerCentered">
          <Navbar color="light" light expand="md">

            <NavLink style={{ cursor: 'pointer' }} onClick={() => { this.handleChangePath("/Dashborad") }} >
              <b>My Supprot</b>
            </NavLink>
            <NavbarToggler onClick={this.toggle} style={{ float: "right" }} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>

              <NavLink onClick={() => { this.handleChangePath("/Dashborad") }} >
                  <b>Dashborad</b>
                </NavLink>
                <NavLink onClick={() => { this.handleChangePath("/PageOne") }} >
                  <b>First</b>
                </NavLink>
                <NavLink onClick={() => { this.handleChangePath("/PageTwo") }} >
                  <b>Second</b>
                </NavLink>

                {localStorage.userName !== "" &&
                  <div id="loginUserTag">
                    <Dropdown nav isOpen={this.state.toggleDropdown} toggle={this.toggleDropdown}>
                      <DropdownToggle nav caret>
                        {localStorage.userName}
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem onClick={this.handleLogout}>Logout</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                }


              </Nav>
            </Collapse>
          </Navbar>


        </div>
      </div>
    );
  }
}

export default MainNavigator;