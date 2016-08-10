import React from 'react';
import { Link } from 'react-router';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import LogoImgWhite from '../../images/logo-white.png';
import LogoImgBlue from '../../images/logo-color.png';

import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

class Mynav extends React.Component {
    render() {
      const logoImgSrc = this.props.location.pathname === '/' ? LogoImgWhite : LogoImgBlue;
        return (
          <Navbar >
            <Navbar.Header>
              <Navbar.Brand>
                 <Link to='/' className='navbar-brand'><img src={logoImgSrc} alt="Freetrailer" /></Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
               <LinkContainer to="/book-en-trailer/Kopenhagen">
                  <NavItem>Book en trailer</NavItem>
                </LinkContainer>
                <LinkContainer to="/spoergsmaal-svar">
                  <NavItem>Spørgsmål & svar</NavItem>
                </LinkContainer>
                <LinkContainer to="/nyheder">
                  <NavItem>Nyheder</NavItem>
                </LinkContainer>
                <LinkContainer to="/om-freetrailer">
                  <NavItem>Om Freetrailer</NavItem>
                </LinkContainer>
                <LinkContainer to="/bliv-partner">
                  <NavItem>Bliv partner</NavItem>
                </LinkContainer>
                <LinkContainer to="/login" className="login">
                  <NavItem>mine ordrer</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}

export default Mynav;
