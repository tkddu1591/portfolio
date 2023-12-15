/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
import { Link } from 'react-router-dom';
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from 'headroom.js';
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap';

class DemoNavbar extends React.Component {
  state = {
    collapseClasses: '', collapseOpen: false,
  };

  componentDidMount() {
    let headroom = new Headroom(document.getElementById('navbar-main'));
    // initialise
    headroom.init();
  }

  onExiting = () => {
    this.setState({
      collapseClasses: 'collapsing-out',
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: '',
    });
  };

  render() {
    return (<>
      <header className='header-global'>
        <Navbar
          className='navbar-main navbar-transparent navbar-light headroom nav'
          expand='lg'
          id='navbar-main'
        >
          <Container>
            <NavbarBrand className='mr-lg-5 navName' to='/' tag={Link}>
              <span><i className='bi bi-bookmarks'></i><strong>Sang's</strong> 포트폴리오</span>
            </NavbarBrand>
            <button className='navbar-toggler' id='navbar_global'>
              <span className='navbar-toggler-icon' />
            </button>
            <UncontrolledCollapse
              toggler='#navbar_global'
              navbar
              className={this.state.collapseClasses}
              onExiting={this.onExiting}
              onExited={this.onExited}
            >
              <div className='navbar-collapse-header'>
                <Row>
                  <Col className='collapse-brand' xs='6'> <span><i
                    className='bi bi-bookmarks'></i><strong>Sang's</strong> 포트폴리오</span>
                  </Col>
                  <Col className='collapse-close' xs='6'>
                    <button className='navbar-toggler' id='navbar_global'>
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className='align-items-lg-center ml-lg-auto menu' navbar>
                <NavItem>
                  <NavLink className={'name'}>
                    About me
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={'name'}>
                    Skill
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={'name'}>
                    Project
                  </NavLink>
                </NavItem>
                <NavItem className={'lastMenu'}>
                  <NavLink className={'name'}>
                    History
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className='nav-link-icon'
                    href='https://www.facebook.com/kimsangyup'
                    id='tooltip333589074'
                    target='_blank'
                  >
                    <i className='fa fa-facebook-square' />
                    <span className='nav-link-inner--text d-lg-none ml-2'>
                        Facebook
                      </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target='tooltip333589074'>
                    Like me on Facebook
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    className='nav-link-icon'
                    href='https://github.com/tkddu1591'
                    id='tooltip112445449'
                    target='_blank'
                  >
                    <i className='fa fa-github' />
                    <span className='nav-link-inner--text d-lg-none ml-2'>
                        Github
                      </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target='tooltip112445449'>
                    Star me on Github
                  </UncontrolledTooltip>
                </NavItem>
                {/*<NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-navbar"
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-cloud-download mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">
                        Download
                      </span>
                    </Button>
                  </NavItem>*/}
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>);
  }
}

export default DemoNavbar;
