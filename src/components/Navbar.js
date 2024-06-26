import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../Assets/logo.png';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener('scroll', scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed='top'
      expand='md'
      className={navColour ? 'sticky' : 'navbar'}
    >
      <Container>
        <Navbar.Brand href='/' className='d-flex'>
          <img src={logo} className='img-fluid logo' alt='brand' />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls='responsive-navbar-nav'
          onClick={() => {
            updateExpanded(expand ? false : 'expanded');
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto' defaultActiveKey='#home'>
            <Nav.Item>
              <Nav.Link href='#home' onClick={() => updateExpanded(false)}>
                &lt;Home /&gt;
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href='#about' onClick={() => updateExpanded(false)}>
                &lt;AboutMe /&gt;
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href='#projects' onClick={() => updateExpanded(false)}>
                &lt;Projects /&gt;
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href='#contactme' onClick={() => updateExpanded(false)}>
                &lt;ContactMe /&gt;
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
